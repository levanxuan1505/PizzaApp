/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-virtualized-view';
import {Colors, voucher} from '@constants';
import styles from '@css/VoucherScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {addVoucher} from '../redux/voucherSlice';
import {Display} from '@utils';
export default function VoucherScreen({navigation}: any) {
  // redux
  const dispatch = useDispatch();
  const voucherStore = useSelector((state: any) => state.voucher);

  const CartCard = ({item}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={Platform.OS === 'ios' ? 0.5 : 0.8}
        onPress={() => {
          navigation.goBack(),
            dispatch(
              addVoucher({
                id: item.id,
                name: item.name,
                price: item.price,
              }),
            );
        }}>
        <View
          style={[
            styles.cartCard,
            {
              backgroundColor:
                voucherStore[0].id === item.id
                  ? Colors.LIGHT_GREEN
                  : Colors.DEFAULT_WHITE,
            },
          ]}>
          <View
            style={{
              height: Platform.OS === 'ios' ? 100 : 120,
              marginLeft: 5,
              paddingVertical: 20,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={item.image}
              style={{
                height: Display.setWidth(14),
                width: Display.setWidth(19),
                borderRadius: 5,
              }}
            />
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? Display.setWidth(4) : 14,
                  fontWeight: '600',
                  paddingLeft: 10,
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: Platform.OS === 'ios' ? 18 : 14,
                  marginVertical: 5,
                  paddingLeft: 10,
                }}>
                {item.price}k
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          onPress={navigation.goBack}
          color={Colors.DEFAULT_GREEN}
          style={{
            position: 'absolute',
            left: 5,
          }}
        />
        <Text
          style={{
            fontSize: Display.setWidth(5),
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Kho Voucher
        </Text>
      </View>
      {/* location */}
      <View>
        {Platform.OS === 'ios' ? (
          <ScrollView>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 80}}
              data={voucher}
              renderItem={({item}) => <CartCard item={item} />}
            />
            <View style={{marginVertical: 70}}></View>
          </ScrollView>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 80}}
              data={voucher}
              renderItem={({item}) => <CartCard item={item} />}
              ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
            />
            <View style={{marginBottom: 200}}></View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
