/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '@constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconsss from 'react-native-vector-icons/Ionicons';

export default function Voucher() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.voucher}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 9,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="payments"
            size={42}
            color={Colors.DEFAULT_GREEN}
            style={{paddingLeft: 4}}
          />

          <Text
            style={{
              fontSize: 20,
              color: Colors.DEFAULT_GREEN,
              paddingLeft: 5,
            }}>
            Pizza Voucher
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 3,
          }}>
          <Text style={{color: Colors.DEFAULT_GREEN, right: 10}}>
            Miễn phí vận chuyển
          </Text>
          <Icon
            name="arrow-forward-ios"
            size={20}
            color={Colors.DEFAULT_GREEN}
            style={{right: 10}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Iconsss
            name="ios-server"
            size={30}
            style={{paddingLeft: 18, color: Colors.DEFAULT_GREEN}}
          />
          <Text
            style={{
              color: Colors.DEFAULT_YELLOW,
              paddingLeft: 13,
              marginTop: 0,
              fontSize: 18,
            }}>
            Dùng 400 xu
          </Text>
        </View>
        <View style={{right: 15}}>
          <Switch
            trackColor={{false: '#767577', true: Colors.DEFAULT_GREEN}}
            thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  voucher: {
    paddingBottom: 3,
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 15,
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
