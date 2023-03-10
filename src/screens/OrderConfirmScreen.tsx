/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {SafeAreaView, View, Text, Image, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';

import {Colors} from '@constants';
import styles from '@css/OrderConfirmStyle';
// redux import
import {useSelector} from 'react-redux';
//

const OrderConfirmScreen = ({navigation}: any) => {
  //redux Using
  const cartGoods = useSelector((state: any) => state.cart);
  const order = useSelector((state: any) => state.order);
  const voucher = useSelector((state: any) => state.voucher);
  const coin = useSelector((state: any) => state.coin);
  const sum = cartGoods.length;
  function sumTotal(cartGoodsTotal: any) {
    let total: number = 0;
    for (let i = 0; i < cartGoodsTotal.length; i++) {
      total += cartGoodsTotal[i].price;
    }
    return total;
  }
  //
  const CartCard = ({item}: any) => {
    return (
      <View>
        <View style={styles.cartCard}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={item[0].image} style={{height: 80, width: 80}} />
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
                {item[0].name}
              </Text>
              <Text style={{fontSize: 13, color: Colors.DEFAULT_GREY}}>
                {item[0].ingredients}
              </Text>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                {item[0].price}k
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
                  Ch??? X??c Nh???n
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
                fontSize: Platform.OS === 'ios' ? 18 : 12,
                color: Colors.DEFAULT_GREEN,
              }}>
              T???ng s??? l?????ng m??n ??n :
            </Text>
            <Text
              style={{
                fontSize: Platform.OS === 'ios' ? 18 : 12,
                color: Colors.DEFAULT_GREEN,
              }}>
              {sum}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: Platform.OS === 'ios' ? 18 : 12,
                color: Colors.DEFAULT_GREEN,
              }}>
              T???ng ti???n c???n thanh to??n :
            </Text>
            <Text
              style={{
                fontSize: Platform.OS === 'ios' ? 18 : 12,
                color: Colors.DEFAULT_GREEN,
              }}>
              ??{sumTotal(cartGoods) + (50 - voucher[0].price - coin[0].price)}
              .000
            </Text>
          </View>
          <View
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
                ??ang ch??? x??? l??
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return !order[0].order ? (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          onPress={navigation.goBack}
          color={Colors.DEFAULT_GREEN}
          style={{position: 'absolute', left: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Ch??? x??c nh???n
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
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: '700',
            color: Colors.DEFAULT_GREEN,
          }}>
          B???n ch??a c?? ????n h??ng n??o c???n x??c nh???n
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
          style={{position: 'absolute', left: 2}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Ch??? x??c nh???n
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
      <CartCard item={cartGoods} />
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={cartGoods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
      /> */}
    </SafeAreaView>
  );
};

export default OrderConfirmScreen;
