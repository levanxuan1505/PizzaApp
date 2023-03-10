/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconBadge from 'react-native-icon-badge';
import Iconss from 'react-native-vector-icons/Ionicons';
import styles from '@css/CartScreenStyle';
import {Colors} from '@constants';
import {PrimaryButton} from '@components';
// redux import
import {useSelector, useDispatch} from 'react-redux';
import {removeCart} from '../redux/cartSlice';
//
const CartScreen = ({navigation}: any) => {
  // reduxSelector
  const cartGoods = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const badge = cartGoods.length;
  function sum(cartGoods: any) {
    let sum = 0;
    for (let i = 0; i < cartGoods.length; i++) {
      sum += cartGoods[i].price;
    }
    return sum;
  }
  const CartCard = ({item}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={Platform.OS === 'ios' ? 0.2 : 0.8}
        onPress={() => navigation.navigate('DetailCard', item)}>
        <View style={styles.cartCard}>
          <Image source={item.image} style={{height: 80, width: 80}} />
          <View
            style={{
              height: 100,
              marginLeft: 10,
              paddingVertical: 20,
              flex: 1,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
            <Text style={{fontSize: 13, color: Colors.DEFAULT_GREY}}>
              {item.ingredients}
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              {item.price}k
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => dispatch(removeCart({id: item.id}))}
            style={{marginRight: 16, alignItems: 'center'}}>
            <Iconss name="trash" size={32} color={Colors.DEFAULT_GREEN} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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
          Gi??? h??ng
        </Text>
        <View style={{position: 'absolute', right: 25}}>
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: Colors.DEFAULT_RED,
          }}>
          Kh??ng c?? m??n ??n trong gi??? h??ng
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
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Gi??? h??ng
        </Text>
        <View style={{position: 'absolute', right: 25}}>
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
            marginVertical: 15,
            marginHorizontal: 40,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            T???ng ????n h??ng
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            ?? {sum(cartGoods)}.000
          </Text>
        </View>
        <View style={{marginHorizontal: 30}}>
          <PrimaryButton
            title="THANH TO??N"
            onPress={() => navigation.navigate('Checkout')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CartScreen;
