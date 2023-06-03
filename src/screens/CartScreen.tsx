/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, SafeAreaView, RefreshControl} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconBadge from 'react-native-icon-badge';
import styles from '@css/CartScreenStyle';
import {Colors} from '@constants';
import {PrimaryButton, CardTag} from '@components';
// redux import
import {useSelector} from 'react-redux';
import {Display} from '@utils';
//
const CartScreen = ({navigation}: any) => {
  // reduxSelector
  const cartGoods = useSelector((state: any) => state.cart);
  const userName = useSelector((state: any) => state.user);
  const enoughCondition = userName[0].userName && cartGoods.length;
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);
  const badge = cartGoods.length;
  function sum(cartGoods: any) {
    let sum = 0;
    for (let i = 0; i < cartGoods.length; i++) {
      sum += cartGoods[i].priceTotal;
    }
    return sum;
  }

  return !enoughCondition ? (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={Display.setWidth(7)}
          onPress={navigation.goBack}
          color={Colors.DEFAULT_GREEN}
          style={{position: 'absolute', left: 8}}
        />
        <Text
          style={{
            fontSize: Display.setWidth(6),
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Giỏ hàng
        </Text>
        <View style={{position: 'absolute', right: Display.setWidth(3)}}>
          <View>
            <Icon
              name="shopping-cart"
              size={Display.setWidth(8)}
              color={Colors.DEFAULT_GREEN}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Text
          style={{
            fontSize: Display.setWidth(8) - 14,
            fontWeight: '700',
            color: Colors.DEFAULT_RED,
          }}>
          Không có món ăn trong giỏ hàng
        </Text>
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
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
            fontSize: Display.setWidth(5),
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Giỏ hàng
        </Text>
        <View style={{position: 'absolute', right: Display.setWidth(2.5)}}>
          <IconBadge
            MainElement={
              <View>
                <Icon
                  name="shopping-cart"
                  size={32}
                  color={Colors.DEFAULT_GREEN}
                />
              </View>
            }
            BadgeElement={<Text style={{color: '#FFFFFF'}}>{badge}</Text>}
            IconBadgeStyle={{
              marginRight: -7,
              marginTop: -6,
              width: 17,
              height: 19,
              backgroundColor: 'red',
            }}
          />
        </View>
      </View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View>
            <Text
              style={{
                fontSize: Display.setWidth(3.5),
                paddingVertical: Display.setWidth(3),
                paddingHorizontal: Display.setWidth(2),
                fontWeight: '700',
                color: Colors.DEFAULT_GREEN,
                textAlign: 'center',
              }}>
              Trượt món ăn sang trái hoặc phải để thêm tuỳ chọn
            </Text>
          </View>
        }
        contentContainerStyle={{
          paddingBottom: 10,
          alignItems: 'center',
        }}
        data={cartGoods}
        renderItem={({item}) => <CardTag navigation={navigation} item={item} />}
      />
      <View style={styles.total}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: Display.setWidth(3),
            marginHorizontal: Display.setWidth(5.5),
          }}>
          <Text
            style={{
              fontSize: Display.setWidth(5),
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            Tổng đơn hàng
          </Text>
          <Text
            style={{
              fontSize: Display.setWidth(5),
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            đ {sum(cartGoods)}.000
          </Text>
        </View>
        <View style={{marginHorizontal: Display.setWidth(5)}}>
          <PrimaryButton
            title="THANH TOÁN"
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CartScreen;
