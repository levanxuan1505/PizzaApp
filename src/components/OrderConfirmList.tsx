/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Platform,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '@constants';
import styles from '@css/OrderConfirmStyle';
// redux import
import {useSelector, useDispatch} from 'react-redux';
import {removeToWaitForGood} from '../redux/orderSlice';
import {addForGood, removeToDelivery} from '../redux/waitForGoods';
import {addDelivering, removeToEvaluate} from '../redux/deliveringSlice';
import {addEvaluate} from '../redux/evaluateSlice';
import {Display} from '@utils';
//

const OrderConfirmList = ({navigation, data, indexOfDispatch}) => {
  const index = indexOfDispatch;
  console.log(index + 'alo');
  const voucher = useSelector((state: any) => state.voucher);
  const coin = useSelector((state: any) => state.coin);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);
  const dispatch = useDispatch();
  const CartCard = ({items}: any) => {
    const numberOfFoods = items.length;
    const sumTotal = items => {
      let total: number = 0;
      for (let i = 0; i < items.length; i++) {
        total += items[i].priceTotal;
        console.log(i);
        console.log(items[i].priceTotal);
        console.log(total);
      }
      return total;
    };
    const SumMustPay =
      sumTotal(items) + (50 - voucher[0].price - coin[0].price);
    const item = items[0];
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('OrderDetail', {
            item: SumMustPay,
            food: items,
            numberOfFoods: numberOfFoods,
          })
        }>
        <View style={styles.cartCard}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={item.image}
              style={{
                height: Display.setWidth(16),
                width: Display.setWidth(16),
                borderRadius: 40,
              }}
            />
            <View
              style={{
                height: 100,
                marginLeft: 10,
                paddingVertical: 20,
                flex: 1,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: Display.setWidth(4),
                  color: Colors.DEFAULT_GREEN,
                }}>
                {item.name}
              </Text>
              <Text style={{fontSize: 13, color: Colors.DEFAULT_GREY}}>
                {item.ingredients}
              </Text>
              <Text style={{fontSize: Display.setWidth(4), fontWeight: 'bold'}}>
                {item.price}k
              </Text>
            </View>
            <View style={{marginRight: 0, alignItems: 'center'}}>
              <View>
                <Text
                  style={{
                    fontSize:
                      Platform.OS === 'ios' ? Display.setWidth(10) - 20 : 15,
                    fontWeight: '500',
                    color: Colors.DEFAULT_GREEN,
                  }}>
                  Chờ Xác Nhận
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: Platform.OS === 'ios' ? Display.setWidth(4) : 14,
                color: Colors.DEFAULT_GREEN,
              }}>
              Tổng số món ăn :
            </Text>
            <Text
              style={{
                fontSize: Platform.OS === 'ios' ? 18 : 14,
                color: Colors.DEFAULT_GREEN,
              }}>
              {numberOfFoods}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: Platform.OS === 'ios' ? Display.setWidth(4) : 14,
                color: Colors.DEFAULT_GREEN,
              }}>
              Tổng tiền thanh toán :
            </Text>
            <Text
              style={{
                fontSize: Platform.OS === 'ios' ? Display.setWidth(4) : 14,
                color: Colors.DEFAULT_GREEN,
              }}>
              đ {SumMustPay}.000 VND
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              index === 0
                ? dispatch(addForGood({items: items}))
                : index === 1
                ? dispatch(addDelivering({items: items}))
                : index === 2
                ? dispatch(addEvaluate({items: items}))
                : undefined;
              index === 0
                ? dispatch(removeToWaitForGood({id: item.id}))
                : index === 1
                ? dispatch(removeToDelivery({id: item.id}))
                : dispatch(removeToEvaluate({id: item.id}));
              console.log(item.id);
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingBottom: 10,
            }}>
            <View
              style={{
                borderRadius: 3,
                padding: 15,
                backgroundColor: Colors.DEFAULT_GREEN,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: Colors.DEFAULT_WHITE,
                }}>
                Xác nhận hoàn tất
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 80}}
      data={data}
      renderItem={({item}) => <CartCard items={item} />}
      ListFooterComponent={
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: Display.setWidth(3.5),
              paddingVertical: Display.setWidth(3),
              fontWeight: '700',
              color: Colors.DEFAULT_GREEN,
            }}>
            Chọn vào đơn hàng để xem chi tiết
          </Text>
        </View>
      }
      ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
    />
  );
};

export default OrderConfirmList;
