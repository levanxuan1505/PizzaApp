/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Modal,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {memo, useState} from 'react';
import {Colors} from '@constants';
import Icons from 'react-native-vector-icons/Fontisto';
import {useSelector, useDispatch} from 'react-redux';
import {addOrder} from '../redux/orderSlice';
const DetailTotal = ({navigation}) => {
  const cartGoods = useSelector((state: any) => state.cart);
  const coin = useSelector((state: any) => state.coin);
  const voucher = useSelector((state: any) => state.voucher);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
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
  function sum(cartGoodsTotal: any) {
    let sum: number = 0;
    for (let i = 0; i < cartGoodsTotal.length; i++) {
      sum += cartGoodsTotal[i].price;
    }
    return sum;
  }
  return (
    <View style={styles.total}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  total: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flexDirection: 'row',
    paddingBottom: Platform.OS === 'ios' ? 55 : 87,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: Platform.OS === 'ios' ? 0 : 10,
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
    width: Platform.OS === 'ios' ? '80%' : '90%',
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
export default memo(DetailTotal);
