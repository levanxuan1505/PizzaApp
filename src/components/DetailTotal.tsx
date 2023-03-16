/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Platform} from 'react-native';
import React, {memo} from 'react';
import {Colors} from '@constants';
import Icons from 'react-native-vector-icons/Fontisto';
import {useSelector} from 'react-redux';
const DetailTotal = () => {
  const cartGoods = useSelector((state: any) => state.cart);
  const coin = useSelector((state: any) => state.coin);
  const voucher = useSelector((state: any) => state.voucher);
  function sum(cartGoodsTotal: any) {
    let sum: number = 0;
    for (let i = 0; i < cartGoodsTotal.length; i++) {
      sum += cartGoodsTotal[i].price;
    }
    return sum;
  }
  return (
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
      <View style={{paddingTop: 0}}>
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: -30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: Platform.OS === 'ios' ? 18 : 16}}>
            Tổng tiền hàng
          </Text>
          <Text style={{fontSize: Platform.OS === 'ios' ? 17 : 16}}>
            đ{sum(cartGoods)}.000
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: Platform.OS === 'ios' ? 18 : 16}}>
            Tổng tiền phí vận chuyển
          </Text>
          <Text style={{fontSize: Platform.OS === 'ios' ? 17 : 16}}>
            50.000
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: Platform.OS === 'ios' ? 18 : 16}}>
            Voucher vận chuyển
          </Text>
          <Text style={{fontSize: Platform.OS === 'ios' ? 17 : 16}}>
            -{voucher[0].price}.000
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: Platform.OS === 'ios' ? 18 : 16}}>
            Triết khấu Xu
          </Text>
          <Text style={{fontSize: Platform.OS === 'ios' ? 17 : 16}}>
            -{coin[0].price}.000
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 20 : 18,
              color: Colors.DEFAULT_GREEN,
            }}>
            Tổng thanh toán
          </Text>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 19 : 17,
              color: Colors.DEFAULT_GREEN,
            }}>
            {sum(cartGoods) + (50 - voucher[0].price - coin[0].price)}.000
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  totalBill: {
    borderRadius: 10,
    height: 200,
    marginBottom: 10,
    justifyContent: 'space-around',
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
});
export default memo(DetailTotal);
