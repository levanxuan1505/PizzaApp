/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  SafeAreaView,
  RefreshControl,
  TouchableHighlight,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconBadge from 'react-native-icon-badge';
import Iconss from 'react-native-vector-icons/Ionicons';
import styles from '@css/CartScreenStyle';
import {Colors} from '@constants';
import {PrimaryButton} from '@components';
// redux import
import {useSelector, useDispatch} from 'react-redux';
import {removeCart} from '../redux/cartSlice';
import {Display} from '@utils';
//
const CartScreen = ({navigation}: any) => {
  // reduxSelector
  const cartGoods = useSelector((state: any) => state.cart);
  const userName = useSelector((state: any) => state.user);
  const enoughCondition = userName[0].userName && cartGoods.length;
  const dispatch = useDispatch();
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
      sum += cartGoods[i].price;
    }
    return sum;
  }
  const CartCard = ({item}: any) => {
    const totalTopings =
      (item.value1 ? 1 : 0) + (item.value2 ? 1 : 0) + (item.value3 ? 1 : 0);
    return (
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={Platform.OS === 'ios' ? 0.2 : 0.8}
        onPress={() => navigation.navigate('DetailOption', item)}>
        <View style={styles.cartCard}>
          <Image
            source={item.image}
            style={{
              height: Display.setWidth(18),
              width: Display.setWidth(18),
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
            <Text style={{fontWeight: 'bold', fontSize: Display.setWidth(3.7)}}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: Display.setWidth(3),
                color: Colors.DEFAULT_GREY,
              }}>
              {item.ingredients}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontSize: Display.setWidth(3.5), fontWeight: 'bold'}}>
                {item.price}k
              </Text>
              <Text
                style={{
                  fontSize: Display.setWidth(3.5),
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                Size: {item.size === 0 ? 'S' : item.size === 5 ? 'M' : 'L'}
              </Text>
              <Text
                style={{
                  fontSize: Display.setWidth(3.5),
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                Topings: {totalTopings}
              </Text>
            </View>
          </View>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => dispatch(removeCart({id: item.id}))}
            style={{
              marginRight: Display.setWidth(3) - 2,
              alignItems: 'center',
            }}>
            <Iconss name="trash" size={32} color={Colors.DEFAULT_GREEN} />
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
    );
  };
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
        <View style={{position: 'absolute', right: Display.setWidth(4)}}>
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
              marginRight: -5,
              marginTop: -6,
              width: 17,
              height: 20,
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
        contentContainerStyle={{paddingBottom: 10}}
        data={cartGoods}
        renderItem={({item}) => <CartCard item={item} />}
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
