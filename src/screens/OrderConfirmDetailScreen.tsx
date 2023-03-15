/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Platform,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';

import {Colors} from '@constants';
import styles from '@css/OrderConfirmStyle';
// redux import
import {useSelector} from 'react-redux';
//

const OrderConfirmDetailScreen = ({navigation, route}: any) => {
  //redux Using
  const cartGoods = useSelector((state: any) => state.cart);
  const SumMustPay = route.params.item;
  //
  const CartCard = ({item}: any) => {
    return (
      <View>
        <View style={styles.cartCardDetail}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={item.image}
              style={{height: 80, width: 80, borderRadius: 40}}
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
                  fontSize: 16,
                  color: Colors.DEFAULT_GREEN,
                }}>
                {item.name}
              </Text>
              <Text style={{fontSize: 13, color: Colors.DEFAULT_GREY}}>
                {item.ingredients}
              </Text>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                {item.price}k
              </Text>
            </View>
            <View style={{marginRight: 0, alignItems: 'center'}}>
              <View>
                <Text
                  style={{
                    fontSize: Platform.OS === 'ios' ? 20 : 12,
                    fontWeight: '500',
                    color: Colors.DEFAULT_GREEN,
                  }}>
                  Chờ Xác Nhận
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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
          Chờ xác nhận
        </Text>
        <View style={{position: 'absolute', right: 0}}>
          <Icons
            name="md-checkmark-done"
            size={32}
            color={Colors.DEFAULT_GREEN}
            style={{
              marginRight: Platform.OS === 'ios' ? 20 : 18,
              alignItems: 'center',
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingBottom: 10,
        }}>
        <Text style={{fontSize: 20, color: Colors.DEFAULT_GREEN}}>
          Tổng thanh toán:
        </Text>
        <Text style={{fontSize: 20, color: Colors.DEFAULT_RED}}>
          đ {SumMustPay}.000 VND
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 10,
          paddingHorizontal: 28,
        }}>
        <Text style={{fontSize: 20, color: Colors.DEFAULT_GREEN}}>
          Tổng số món ăn:
        </Text>
        <Text style={{fontSize: 20, color: Colors.DEFAULT_RED}}>
          {cartGoods.length}
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={cartGoods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
      />
    </SafeAreaView>
  );
};
export default OrderConfirmDetailScreen;
