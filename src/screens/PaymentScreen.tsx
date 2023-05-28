/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  RefreshControl,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {payment} from '@constants';
import {Colors} from '@constants';
import styles from '@css/PaymentScreenStyle';
// redux
import {useDispatch} from 'react-redux';
import {choosePayment} from '../redux/paymentSlice';
//

const PaymentScreen = ({navigation}: any) => {
  //redux
  const dispatch = useDispatch();
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
        activeOpacity={Platform.OS === 'ios' ? 0.2 : 0.8}
        onPress={() => {
          dispatch(choosePayment({name: item.name, image: item.image})),
            navigation.goBack();
        }}>
        <View style={styles.cartCard}>
          <Image
            source={item.image}
            style={{height: 70, width: 70, borderRadius: 10}}
          />
          <View
            style={{
              height: 100,
              marginLeft: 10,
              paddingVertical: 20,
              flex: 1,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: item.color,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: item.color,
              }}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
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
          style={{position: 'absolute', left: 8}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Giỏ hàng
        </Text>
      </View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
        data={payment}
        renderItem={({item}) => <CartCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default PaymentScreen;
