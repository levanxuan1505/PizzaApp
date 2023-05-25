/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {memo} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {useSelector} from 'react-redux';
import IconBadge from 'react-native-icon-badge';
import {Colors} from '@constants';

const Header = ({navigation}) => {
  const userName = useSelector((state: any) => state.user);
  const notification = useSelector((state: any) => state.notification);
  const badge = notification.length;
  const Avatar = () => {
    return userName[0].userName ? (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => navigation.navigate('Profile')}
        style={{right: Platform.OS === 'ios' ? 0 : 5}}>
        {/*  */}
        <IconBadge
          MainElement={
            <View style={{top: 5}}>
              <Image
                source={require('../assets/images/avatar.webp')}
                style={{
                  height: Platform.OS === 'ios' ? 50 : 45,
                  width: Platform.OS === 'ios' ? 50 : 45,
                  borderRadius: 30,
                }}
              />
            </View>
          }
          BadgeElement={<Text style={{color: '#FFFFFF'}}>{badge}</Text>}
          IconBadgeStyle={{
            marginRight: -9,
            marginTop: -4,
            width: 19,
            height: 20,
            backgroundColor: 'red',
          }}
        />
      </TouchableHighlight>
    ) : (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => navigation.navigate('Profile')}
        style={{
          right: Platform.OS === 'ios' ? 0 : 2,
          top: Platform.OS === 'ios' ? -5 : 0,
        }}>
        <View>
          <Image
            source={require('../assets/images/nouser.jpeg')}
            style={{
              height: Platform.OS === 'ios' ? 50 : 45,
              width: Platform.OS === 'ios' ? 50 : 45,
              borderRadius: 30,
            }}
          />
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={styles.header}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 30 : 24,
              color: Colors.DEFAULT_GREEN,
              fontWeight: '600',
            }}>
            {userName[0].userName
              ? 'Xin chào, ' + userName[0].userName
              : `Chào mừng trở lại`}
          </Text>
        </View>
        <Text style={{marginTop: 1, fontSize: 22, color: Colors.DEFAULT_GREY}}>
          Bạn muốn ăn gì hôm nay?
        </Text>
      </View>
      <Avatar />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 2 : 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
export default memo(Header);
