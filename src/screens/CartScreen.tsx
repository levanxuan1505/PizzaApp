/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconBadge from 'react-native-icon-badge';

import {Colors} from '@constants';
import {foods} from '@constants';
import {PrimaryButton} from '@components';

const CartScreen = ({navigation}: any) => {
  const CartCard = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailCard', item)}>
        <View style={style.cartCard}>
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
          <View style={{marginRight: 20, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginVertical: 5}}>
              x{Math.floor(Math.random() * 5) + 1}
            </Text>
            <View style={style.actionBtn}>
              <Icon name="remove" size={25} color={Colors.DEFAULT_WHITE} />
              <Icon name="add" size={25} color={Colors.DEFAULT_WHITE} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
      <View style={style.header}>
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
          Giỏ hàng
        </Text>
        <View style={{position: 'absolute', right: 5}}>
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
            BadgeElement={<Text style={{color: '#FFFFFF'}}>3</Text>}
            IconBadgeStyle={{
              marginRight: -5,
              marginTop: -6,
              width: 17,
              height: 20,
              backgroundColor: 'red',
            }}
            // Hidden={this.state.BadgeCount == 0}
          />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        // ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        // ListFooterComponent={() => (
        //   <View>
        //     <View
        //       style={{
        //         flexDirection: 'row',
        //         justifyContent: 'space-between',
        //         marginVertical: 15,
        //       }}>
        //       <Text style={{fontSize: 18, fontWeight: 'bold'}}>
        //         Total Price
        //       </Text>
        //       <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
        //     </View>
        //     <View style={{marginHorizontal: 30}}>
        //       <PrimaryButton title="CHECKOUT" />
        //     </View>
        //   </View>
        // )}
      />
      <View style={style.total}>
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
            Tổng đơn hàng
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            đ192.742
          </Text>
        </View>
        <View style={{marginHorizontal: 30}}>
          <PrimaryButton
            title="THANH TOÁN"
            onPress={() => navigation.navigate('Checkout', foods)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 11,
  },
  total: {
    // overflow: 'hidden',
    backgroundColor: Colors.DEFAULT_WHITE,
    // marginBottom: 30,
    paddingTop: 2,
    paddingBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  actionBtn: {
    width: 80,
    height: 34,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 30,
    paddingVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
});

export default CartScreen;
