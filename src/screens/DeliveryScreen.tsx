/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, Text, Platform, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';

import {Colors} from '@constants';
import styles from '@css/OrderConfirmStyle';
import {OrderConfirmList} from '@components';
// redux import
import {useSelector} from 'react-redux';
import {Display} from '@utils';
//
const DeliveryScreen = ({navigation}: any) => {
  //redux Using
  const delivery = useSelector((state: any) => state.delivering);

  return !delivery.length ? (
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
            fontSize: Display.setWidth(5),
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Chờ xác nhận
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
            fontSize: Display.setWidth(3.5),
            fontWeight: '700',
            color: Colors.DEFAULT_GREEN,
            textAlign: 'center',
          }}>
          Bạn chưa có đơn hàng hiện đang giao
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
          Chờ giao hàng
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
      <OrderConfirmList
        navigation={navigation}
        data={delivery}
        indexOfDispatch={2}
      />
    </SafeAreaView>
  );
};

export default DeliveryScreen;
