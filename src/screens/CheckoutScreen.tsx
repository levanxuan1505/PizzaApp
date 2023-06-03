/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
  RefreshControl,
  TouchableHighlight,
} from 'react-native';
import React, {memo} from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
import IconBadge from 'react-native-icon-badge';
import styles from '@css/CheckoutScreenStyle';
import {Colors} from '@constants';
import {
  Voucher,
  Payment,
  Location,
  DetailTotal,
  TotalCheckout,
} from '@components';
import {useSelector} from 'react-redux';
import {Display} from '@utils';

const CheckoutScreen = ({navigation}) => {
  const cartGoods = useSelector((state: any) => state.cart);
  const badge: number = cartGoods.length;
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);
  const CartCard = ({item}: any) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => navigation.navigate('DetailOption', item)}>
        <View style={styles.cartCard}>
          <Image
            source={item.image}
            style={{
              height: Platform.OS === 'ios' ? Display.setWidth(18) : 70,
              width: Platform.OS === 'ios' ? Display.setWidth(18) : 70,
              borderRadius: 40,
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
                fontSize: Display.setWidth(3.7),
                color: Colors.DEFAULT_GREEN,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: Display.setWidth(3),
                color: Colors.DARK_FOUR,
              }}>
              {item.ingredients}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: Display.setWidth(3.5),
                  fontWeight: '600',
                  color: Colors.GOOGLE_BLUE,
                }}>
                {item.price}k
              </Text>
              <Text
                style={{
                  fontSize: Display.setWidth(3.5),
                  fontWeight: '500',
                  paddingLeft: 12,
                }}>
                Size:{item.size === 0 ? 'S' : item.size === 5 ? 'M' : 'L'}
              </Text>
              <Text
                style={{
                  fontSize: Display.setWidth(3.5),
                  fontWeight: '500',
                  paddingLeft: 5,
                }}>
                Topings: {item.numberOfToping}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return !cartGoods.length ? (
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
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Thanh toán
        </Text>

        <View style={{position: 'absolute', right: 20}}>
          <View>
            <Iconss name="cart-check" size={32} color={Colors.DEFAULT_GREEN} />
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
            fontSize: 18,
            fontWeight: '700',
            color: Colors.DEFAULT_RED,
          }}>
          Không có món ăn để thanh toán
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
          Thanh toán
        </Text>

        <View style={{position: 'absolute', right: 20}}>
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
          />
        </View>
      </View>
      {/* body */}
      <View style={{position: 'relative'}}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
          {/* Detail */}
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
              <View style={{width: Display.setWidth(85)}}>
                <Text
                  style={{
                    color: Colors.DEFAULT_GREEN,
                    paddingLeft: 7,
                    textAlign: 'left',
                    paddingRight: Platform.OS === 'ios' ? 7 : 20,
                    fontSize: Platform.OS === 'ios' ? Display.setWidth(4) : 13,
                  }}>
                  Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo "Điều
                  khoản của Pizza"
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <TotalCheckout navigation={navigation} food={cartGoods} />
      </View>
    </SafeAreaView>
  );
};

export default memo(CheckoutScreen);
