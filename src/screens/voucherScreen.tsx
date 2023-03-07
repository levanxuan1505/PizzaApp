/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  FlatList,
  Image,
  ScrollView as ScrollViewForAndroid,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-virtualized-view';
import {Colors, voucher} from '@constants';
import styles from '@css/VoucherScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {addVoucher} from '../redux/voucherSlice';
export default function VoucherScreen({navigation}: any) {
  // redux
  const dispatch = useDispatch();
  const voucherStore = useSelector((state: any) => state.voucher);

  const CartCard = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() =>
          dispatch(
            addVoucher({
              id: item.id,
              name: item.name,
              price: item.price,
            }),
          )
        }>
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
              flexDirection: 'row',
            }}>
            <Image
              source={item.image}
              style={{height: 60, width: 100, borderRadius: 5}}
            />
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: '600', paddingLeft: 10}}>
                {item.name}
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 18,
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
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
            paddingHorizontal: 100,
          }}>
          Kho Voucher
        </Text>
      </View>
      {/* location */}
      <View>
        <Text
          style={{
            paddingLeft: 22,
            fontSize: 18,
            color: Colors.DEFAULT_GREEN,
            paddingBottom: 10,
          }}>
          Voucher
        </Text>
        {Platform.OS === 'ios' ? (
          <ScrollView>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 80}}
              data={voucher}
              renderItem={({item}) => <CartCard item={item} />}
              ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
            />
            <TouchableOpacity
              style={{marginBottom: 200}}
              onPress={navigation.goBack}>
              <View
                style={[
                  styles.addBtn,
                  {backgroundColor: Colors.DEFAULT_GREEN},
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 9,
                  }}>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: '600',
                      color: Colors.DEFAULT_WHITE,
                      paddingHorizontal: 5,
                    }}>
                    Chọn Voucher
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {/*  */}
          </ScrollView>
        ) : (
          <ScrollViewForAndroid showsVerticalScrollIndicator={false}>
            <FlatList
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 80}}
              data={voucher}
              renderItem={({item}) => <CartCard item={item} />}
              ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
            />
            <TouchableOpacity
              style={{marginBottom: 250, marginTop: -80}}
              onPress={() => navigation.navigate('CreateAddress')}>
              <View style={styles.addBtn}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 9,
                  }}>
                  <Icon
                    name="add-circle-outline"
                    size={32}
                    color={Colors.DEFAULT_GREEN}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '500',
                      color: Colors.DEFAULT_GREEN,
                      paddingHorizontal: 5,
                    }}>
                    Thêm địa chỉ mới
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollViewForAndroid>
        )}
      </View>
    </SafeAreaView>
  );
}
