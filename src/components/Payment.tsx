/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {Colors} from '@constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
const Payment = ({navigation}) => {
  const payment = useSelector((state: any) => state.payment);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Payment')}
      style={styles.payment}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: 9,
          }}>
          <Image
            source={payment[0].image}
            style={{
              position: 'absolute',
              height: 50,
              width: 50,
              borderRadius: 5,
              left: 12,
              top: -2,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              color: Colors.DEFAULT_GREEN,
              paddingLeft: 70,
              paddingBottom: 5,
            }}>
            {payment[0].name}
          </Text>
          <Icon
            name="arrow-forward-ios"
            size={20}
            color={Colors.DEFAULT_GREEN}
            style={{
              position: 'absolute',
              right: 12,
              paddingTop: 20,
            }}
          />
        </View>
        <Text
          style={{
            color: Colors.DEFAULT_YELLOW,
            paddingLeft: 78,
            marginTop: 0,
          }}>
          Thanh toán dễ dàng hơn với Zalo Pay
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  payment: {
    paddingBottom: 3,
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 15,
    marginTop: 5,
    justifyContent: 'center',
    // marginTop: 10,
    marginHorizontal: 8,
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
});
export default memo(Payment);
