/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  Modal,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Fontisto';
// import Iconsss from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import {Colors} from '@constants';
import {Voucher} from '@components';
import {useSelector, useDispatch} from 'react-redux';
import {addOrder} from '../redux/orderSlice';

const CheckoutScreen = ({navigation}) => {
  // modal
  const [visible, setVisible] = useState(false);
  const ModalPoup = ({visible, children}: any) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        // setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          // duration: 3000,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 300);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  //
  const cartGoods = useSelector((state: any) => state.cart);
  const payment = useSelector((state: any) => state.payment);
  const voucher = useSelector((state: any) => state.voucher);
  const coin = useSelector((state: any) => state.coin);
  const dispatch = useDispatch();
  function sum(cartGoods) {
    let sum = 0;
    for (let i = 0; i < cartGoods.length; i++) {
      sum += cartGoods[i].price;
    }
    return sum;
  }
  const location = useSelector((state: any) => state.location);
  const badge = cartGoods.length;

  const CartCard = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailCard', item)}>
        <View style={styles.cartCard}>
          <Image
            source={item.image}
            style={{
              height: Platform.OS === 'ios' ? 80 : 70,
              width: Platform.OS === 'ios' ? 80 : 70,
            }}
          />
          <View
            style={{
              height: 100,
              marginLeft: Platform.OS === 'ios' ? 10 : 15,
              paddingVertical: 20,
              flex: 1,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
            <Text style={{fontSize: 13, color: Colors.DEFAULT_GREY}}>
              {item.ingredients}
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              {item.price}k
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
      {/* modal */}
      <ModalPoup visible={visible}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={[styles.Header, {borderBottomColor: Colors.DEFAULT_WHITE}]}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: Colors.DEFAULT_GREEN,
                paddingTop: 10,
              }}>
              Xác nhận
            </Text>
          </View>
          <View style={[styles.Header, {top: -10, paddingBottom: 10}]}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: Colors.DEFAULT_GREEN,
              }}>
              Xác nhận order những món ăn này
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: -10,
            }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(addOrder({order: 1})),
                  setVisible(false),
                  navigation.navigate('Profile');
              }}>
              <Text
                style={{
                  color: Colors.DEFAULT_GREEN,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Xác nhận
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text
                style={{
                  color: Colors.DEFAULT_RED,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Huỷ bỏ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPoup>
      {/*  */}
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          onPress={navigation.goBack}
          color={Colors.DEFAULT_GREEN}
          style={{position: 'absolute', left: 2}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Thanh toán
        </Text>

        <View style={{position: 'absolute', right: 7}}>
          <IconBadge
            MainElement={
              <View>
                <Iconss
                  name="cart-check"
                  size={32}
                  color={Colors.DEFAULT_GREEN}
                />
              </View>
            }
            BadgeElement={<Text style={{color: '#FFFFFF'}}>{badge}</Text>}
            IconBadgeStyle={{
              marginRight: -16,
              marginTop: -7,
              width: 17,
              height: 20,
              backgroundColor: 'red',
            }}
            // Hidden={this.state.BadgeCount == 0}
          />
        </View>
      </View>
      {/* body */}
      <View style={{position: 'relative'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <TouchableOpacity onPress={() => navigation.navigate('Local')}>
            <View style={styles.location}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 9,
                }}>
                <Icon
                  name="location-pin"
                  size={28}
                  color={Colors.DEFAULT_GREEN}
                />
                <Text>Địa chỉ nhận hàng</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{paddingLeft: 15}}>
                  <Text>
                    {location[0].name} | {location[0].phone}
                  </Text>
                  <Text>{location[0].dress},</Text>
                  <Text>{location[0].title}</Text>
                </View>
              </View>
              <Icon
                name="arrow-forward-ios"
                size={20}
                color={Colors.DEFAULT_GREEN}
                style={{
                  position: 'absolute',
                  right: 28,
                  // paddingHorizontal: 50,
                }}
              />
            </View>
          </TouchableOpacity>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 15}}
            data={cartGoods}
            renderItem={({item}) => <CartCard item={item} />}
            ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          />
          {/* Voucher */}
          <Voucher navigation={navigation} />
          {/* Thanh toán */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Payment')}
            style={styles.payment}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 9,
                }}>
                <Image
                  source={payment[0].image}
                  style={{
                    position: 'absolute',
                    height: 50,
                    width: 50,
                    borderRadius: 5,
                    left: 12,
                    top: -2,
                  }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: Colors.DEFAULT_GREEN,
                    paddingLeft: 70,
                    paddingBottom: 5,
                  }}>
                  {payment[0].name}
                </Text>
                <Icon
                  name="arrow-forward-ios"
                  size={20}
                  color={Colors.DEFAULT_GREEN}
                  style={{
                    position: 'absolute',
                    right: 12,
                    paddingTop: 20,
                  }}
                />
              </View>
              <Text
                style={{
                  color: Colors.DEFAULT_YELLOW,
                  paddingLeft: 78,
                  marginTop: 0,
                }}>
                Thanh toán dễ dàng hơn với Zalo Pay
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.totalBill}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <Icons name="calendar" size={24} color={Colors.DEFAULT_GREEN} />
              <Text
                style={{
                  color: Colors.DEFAULT_GREEN,
                  paddingLeft: 15,
                  fontSize: 20,
                }}>
                Chi tiết thanh toán
              </Text>
            </View>
            <View style={{paddingTop: 7}}>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Tổng tiền hàng</Text>
                <Text>đ{sum(cartGoods)}.000</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Tổng tiền phí vận chuyển</Text>
                <Text>
                  50.000-{voucher[0].price}.000={50 - voucher[0].price}.000
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18, color: Colors.DEFAULT_GREEN}}>
                  Tổng thanh toán
                </Text>
                <Text style={{fontSize: 18, color: Colors.DEFAULT_YELLOW}}>
                  đ{sum(cartGoods) + (50 - voucher[0].price)}.000 -
                  {coin[0].price}.000=
                  {sum(cartGoods) + (50 - voucher[0].price - coin[0].price)}.000
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.warning}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <Icon
                name="library-books"
                size={26}
                color={Colors.DEFAULT_GREEN}
              />
              <Text
                style={{
                  color: Colors.DEFAULT_GREEN,
                  paddingLeft: 7,
                  paddingRight: Platform.OS === 'ios' ? 7 : 20,
                  fontSize: 16,
                }}>
                {`Nhấn "Đặt hàng" đồng nghĩa với việc bạn 
đồng ý tuân theo "Điều khoản của Pizza"`}
              </Text>
            </View>
          </View>
        </ScrollView>
        {/* fixed total */}
        <View style={styles.total}>
          <Icons
            name="opencart"
            size={44}
            color={Colors.DEFAULT_GREEN}
            style={{
              position: 'absolute',
              left: 35,
              top: 10,
            }}
          />
          <View>
            <Text
              style={{
                color: Colors.DEFAULT_GREEN,
                fontSize: 18,
                paddingRight: 10,
              }}>
              Tổng thanh toán
            </Text>
            <Text style={{color: Colors.DEFAULT_GREEN, fontSize: 18}}>
              đ{sum(cartGoods) + (50 - voucher[0].price - coin[0].price)}.000
            </Text>
          </View>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text
              style={{
                fontSize: 22,
                backgroundColor: Colors.DEFAULT_GREEN,
                padding: 18,
                fontWeight: '800',
                color: Colors.DEFAULT_WHITE,
              }}>
              Đặt hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    position: 'relative',
  },
  location: {
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 8,
    paddingLeft: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  payment: {
    paddingBottom: 3,
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 15,
    justifyContent: 'center',
    // marginTop: 10,
    marginHorizontal: 8,
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  voucher: {
    paddingBottom: 3,
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 15,
    justifyContent: 'center',
    marginHorizontal: 8,
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  totalBill: {
    borderRadius: 10,
    height: 130,
    marginBottom: 10,
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 8,
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  warning: {
    borderRadius: 10,
    height: 80,
    marginBottom: Platform.OS === 'ios' ? 240 : 210,
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 8,
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  money: {
    flexDirection: 'row',
  },
  moneyText: {
    fontSize: 26,
    fontWeight: 700,
    paddingRight: 5,
    color: Colors.DEFAULT_GREEN,
  },
  cartCard: {
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  total: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flexDirection: 'row',
    paddingBottom: Platform.OS === 'ios' ? 55 : 87,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    height: 140,
    backgroundColor: 'white',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    borderRadius: 15,
    elevation: 20,
  },
  Header: {
    // paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 20,
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
    width: '100%',
  },
});
export default CheckoutScreen;
