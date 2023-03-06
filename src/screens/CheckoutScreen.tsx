/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
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
import {useSelector} from 'react-redux';

const CheckoutScreen = ({navigation}) => {
  const cartGoods = useSelector((state: any) => state.cart);
  const payment = useSelector((state: any) => state.payment);
  const voucher = useSelector((state: any) => state.voucher);
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
                  đ{sum(cartGoods) + (50 - voucher[0].price)}.000
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
              đ{sum(cartGoods) + (50 - voucher[0].price)}.000
            </Text>
          </View>
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
});
export default CheckoutScreen;
