/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';
import {Colors} from '@constants';
import Icons from 'react-native-vector-icons/Fontisto';
import {useSelector} from 'react-redux';
const DetailTotal = () => {
  const cartGoods = useSelector((state: any) => state.cart);
  const coin = useSelector((state: any) => state.coin);
  const voucher = useSelector((state: any) => state.voucher);
  const [visible, setVisible] = useState(false);
  function sum(cartGoodsTotal: any) {
    let sum: number = 0;
    for (let i = 0; i < cartGoodsTotal.length; i++) {
      sum += cartGoodsTotal[i].price;
    }
    return sum;
  }
  return (
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
});
export default memo(DetailTotal);
