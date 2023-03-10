/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {payment} from '@constants';
import {Colors} from '@constants';
import styles from '@css/PaymentScreenStyle';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import {choosePayment} from '../redux/paymentSlice';
//

const PaymentScreen = ({navigation}: any) => {
  //redux
  const dispatch = useDispatch();
  const paymentId = useSelector((state: any) => state.payment);
  //
  const payment0 = payment[0];
  const payment1 = payment[1];
  const payment2 = payment[2];
  const payment3 = payment[3];
  const payment4 = payment[4];
  return (
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
            fontSize: Platform.OS === 'ios' ? 20 : 18,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Phương thức thanh toán
        </Text>
        <View style={{position: 'absolute', right: 0}}>
          <Icons
            name="ios-wallet-sharp"
            size={32}
            color={Colors.DEFAULT_GREEN}
            style={{
              marginRight: Platform.OS === 'ios' ? 10 : 18,
              alignItems: 'center',
            }}
          />
        </View>
      </View>

      {/*  */}
      <ScrollView>
        {/* zalopay */}

        <TouchableOpacity
          onPress={() =>
            dispatch(
              choosePayment({name: payment0.name, image: payment0.image}),
            )
          }
          style={[
            styles.cartCard,
            {
              backgroundColor:
                paymentId[0].name === payment0.name
                  ? Colors.LIGHT_GREEN
                  : Colors.DEFAULT_WHITE,
            },
          ]}>
          <Image
            source={payment0.image}
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
                color: Colors.GOOGLE_BLUE,
              }}>
              {payment0.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: Colors.GOOGLE_BLUE,
              }}>
              {payment0.title}
            </Text>
          </View>
        </TouchableOpacity>
        {/* zalopay */}

        {/* momo */}
        <TouchableOpacity
          onPress={() =>
            dispatch(
              choosePayment({name: payment1.name, image: payment1.image}),
            )
          }
          style={[
            styles.cartCard,
            {
              backgroundColor:
                paymentId[0].name === payment1.name
                  ? Colors.LIGHT_GREEN
                  : Colors.DEFAULT_WHITE,
            },
          ]}>
          <Image
            source={payment1.image}
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
                color: Colors.DEFAULT_RED,
              }}>
              {payment1.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: Colors.DEFAULT_RED,
              }}>
              {payment1.title}
            </Text>
          </View>
        </TouchableOpacity>
        {/* vnpay */}
        <TouchableOpacity
          onPress={() =>
            dispatch(
              choosePayment({name: payment2.name, image: payment2.image}),
            )
          }
          style={[
            styles.cartCard,
            {
              backgroundColor:
                paymentId[0].name === payment2.name
                  ? Colors.LIGHT_GREEN
                  : Colors.DEFAULT_WHITE,
            },
          ]}>
          <Image
            source={payment2.image}
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
                color: Colors.FACEBOOK_BLUE,
              }}>
              {payment2.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: Colors.FACEBOOK_BLUE,
              }}>
              {payment2.title}
            </Text>
          </View>
        </TouchableOpacity>
        {/* pizza */}

        <TouchableOpacity
          onPress={() =>
            dispatch(
              choosePayment({name: payment3.name, image: payment3.image}),
            )
          }
          style={[
            styles.cartCard,
            {
              backgroundColor:
                paymentId[0].name === payment3.name
                  ? Colors.LIGHT_GREEN
                  : Colors.DEFAULT_WHITE,
            },
          ]}>
          <Image
            source={payment3.image}
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
                color: Colors.DEFAULT_GREEN,
              }}>
              {payment3.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: Colors.DEFAULT_GREEN,
              }}>
              {payment3.title}
            </Text>
          </View>
        </TouchableOpacity>
        {/* cod */}

        <TouchableOpacity
          onPress={() =>
            dispatch(
              choosePayment({name: payment4.name, image: payment4.image}),
            )
          }
          style={[
            styles.cartCard,
            {
              backgroundColor:
                paymentId[0].name === payment4.name
                  ? Colors.LIGHT_GREEN
                  : Colors.DEFAULT_WHITE,
            },
          ]}>
          <Image
            source={payment4.image}
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
                color: Colors.DEFAULT_YELLOW,
              }}>
              {payment4.name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: Colors.DEFAULT_YELLOW,
              }}>
              {payment4.title}
            </Text>
          </View>
        </TouchableOpacity>
        {/* back */}
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.cartChose}>
            <View
              style={{
                height: 100,
                marginLeft: 10,
                paddingVertical: 20,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  color: Colors.DEFAULT_GREEN,
                }}>
                Chọn Phương Thức
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;
