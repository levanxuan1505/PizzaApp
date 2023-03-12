/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, memo} from 'react';
import {
  SafeAreaView,
  Text,
  View,
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
import IconBadge from 'react-native-icon-badge';
import styles from '@css/CheckoutScreenStyle';
import {Colors} from '@constants';
import {ua} from '../components/TotalCheckout';
import {
  Voucher,
  Payment,
  Location,
  DetailTotal,
  TotalCheckout,
} from '@components';
import {useSelector, useDispatch} from 'react-redux';
import {addOrder} from '../redux/orderSlice';

const CheckoutScreen = ({navigation}) => {
  // modal Pop Validate Check out
  const [visible, setVisible] = useState(ua);
  const ModalPopup = ({visible, children}: any) => {
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
  const dispatch = useDispatch();

  const badge: number = cartGoods.length;

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
            <Text
              style={{
                fontWeight: '700',
                fontSize: 17,
                color: Colors.DEFAULT_GREEN,
              }}>
              {item.name}
            </Text>
            <Text style={{fontSize: 14, color: Colors.DARK_FOUR}}>
              {item.ingredients}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: Colors.GOOGLE_BLUE,
              }}>
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
      <ModalPopup visible={visible}>
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
                paddingBottom: Platform.OS === 'ios' ? 0 : 15,
              }}>
              Xác nhận
            </Text>
          </View>
          <View style={[styles.Header, {top: -10, paddingBottom: 10}]}>
            <Text
              style={{
                fontSize: Platform.OS === 'ios' ? 19 : 16,
                fontWeight: Platform.OS === 'ios' ? '500' : '600',
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
      </ModalPopup>
      {/* End modal */}
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          onPress={navigation.goBack}
          color={Colors.DEFAULT_GREEN}
          style={{position: 'absolute', left: 8}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Thanh toán
        </Text>

        <View style={{position: 'absolute', right: 10}}>
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
          <Location navigation={navigation} />
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
          <Payment navigation={navigation} />
          <DetailTotal />

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
                  fontSize: Platform.OS === 'ios' ? 16 : 13,
                }}>
                {`Nhấn "Đặt hàng" đồng nghĩa với việc bạn 
đồng ý tuân theo "Điều khoản của Pizza"`}
              </Text>
            </View>
          </View>
        </ScrollView>
        <TotalCheckout />
        {/* fixed total */}
        {/* <View style={styles.total}>
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
                fontSize: Platform.OS === 'ios' ? 20 : 14,
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
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default memo(CheckoutScreen);
