/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Platform,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';

import {Colors} from '@constants';
import styles from '@css/OrderConfirmStyle';
// redux import
import {useSelector} from 'react-redux';
import {Display} from '@utils';
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
              style={{
                height: Display.setWidth(17),
                width: Display.setWidth(17),
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
              <Text
                style={{
                  fontSize: Display.setWidth(3),
                  color: Colors.DEFAULT_GREY,
                }}>
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
                    fontSize: Platform.OS === 'ios' ? Display.setWidth(4) : 12,
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
            fontSize: Display.setWidth(5),
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
          paddingBottom: 10,
          paddingHorizontal: Display.setWidth(4),
          position: 'relative',
        }}>
        <Text
          style={{
            fontSize: Display.setWidth(5),
            color: Colors.DEFAULT_GREEN,
          }}>
          Tổng thanh toán:
        </Text>
        <Text
          style={{
            fontSize: Display.setWidth(5),
            position: 'absolute',
            color: Colors.DEFAULT_RED,
            right: Display.setWidth(4),
          }}>
          đ {SumMustPay}.000 VND
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          paddingBottom: 10,
          paddingHorizontal: Display.setWidth(4),
        }}>
        <Text
          style={{
            fontSize: Display.setWidth(5),
            color: Colors.DEFAULT_GREEN,
          }}>
          Tổng số món ăn:
        </Text>
        <Text
          style={{
            fontSize: Display.setWidth(5),
            position: 'absolute',
            right: Display.setWidth(4),
            color: Colors.DEFAULT_RED,
          }}>
          {cartGoods.length}
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cartGoods}
        renderItem={({item}) => <CartCard item={item} />}
      />
      <View style={{marginBottom: -40}}></View>
    </SafeAreaView>
  );
};
export default OrderConfirmDetailScreen;
