/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import {Colors} from '@constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {Display} from '@utils';
const Payment = ({navigation}) => {
  const payment = useSelector((state: any) => state.payment);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Payment')}
      style={styles.payment}>
      <View
        style={{
          flexDirection: 'row',
          position: 'relative',
          alignItems: 'center',
        }}>
        <Icon
          name="arrow-forward-ios"
          size={20}
          color={Colors.DEFAULT_GREEN}
          style={{
            position: 'absolute',
            right: Display.setWidth(2.5),
          }}
        />
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
              height: Display.setWidth(12),
              width: Display.setWidth(12),
              borderRadius: 5,
              left: Display.setWidth(2),
            }}
          />
        </View>
        <View
          style={{left: 20, position: 'relative', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? Display.setWidth(7) - 10 : 15,
              color: Colors.DEFAULT_GREEN,
              paddingBottom: 5,
            }}>
            {payment[0].name}
          </Text>
          <Text
            style={{
              color: Colors.DEFAULT_YELLOW,
              marginTop: 0,
              fontSize: Platform.OS === 'ios' ? Display.setWidth(7) - 14 : 12,
            }}>
            {payment[0].title}
          </Text>
        </View>
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
