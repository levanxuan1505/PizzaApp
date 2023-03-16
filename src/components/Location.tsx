/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import {Colors} from '@constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
const Location = ({navigation}) => {
  const location = useSelector((state: any) => state.location);

  return (
    <TouchableOpacity
      activeOpacity={Platform.OS === 'ios' ? 0.2 : 0.8}
      onPress={() => navigation.navigate('Local')}>
      <View style={styles.location}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            paddingLeft: 9,
          }}>
          <Icon name="location-pin" size={28} color={Colors.DEFAULT_GREEN} />
          <Text style={{bottom: 2, fontSize: Platform.OS === 'ios' ? 16 : 12}}>
            Địa chỉ nhận hàng
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontSize: Platform.OS === 'ios' ? 16 : 12}}>
              {location[0].name} | {location[0].phone}
            </Text>
            <Text style={{fontSize: Platform.OS === 'ios' ? 16 : 12}}>
              {location[0].dress},
            </Text>
            <Text
              style={{
                fontSize: Platform.OS === 'ios' ? 16 : 12,
                paddingBottom: 5,
              }}>
              {location[0].title}
            </Text>
          </View>
        </View>
        <Icon
          name="arrow-forward-ios"
          size={22}
          color={Colors.DEFAULT_GREEN}
          style={{
            position: 'absolute',
            right: 25,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  location: {
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 8,
    paddingLeft: 10,
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
export default memo(Location);
