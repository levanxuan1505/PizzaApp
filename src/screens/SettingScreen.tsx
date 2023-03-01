/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  FlatList,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import {Colors} from '@constants';
import {SecondaryButton} from '@components';
import {ScrollView} from 'react-native-gesture-handler';
import {setting1, setting2, setting3} from '@constants';

export default function SettingScreen({navigation}: any) {
  const CartCard = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailCard', item)}>
        <View
          style={{
            justifyContent: 'center',
            paddingVertical: 9.5,
            borderBottomWidth: 0.2,
            borderBottomColor: Colors.DEFAULT_GREEN,
          }}>
          <Text style={{fontSize: 17}}>{item.title}</Text>
          <Icon
            name="arrow-forward-ios"
            size={17}
            color={Colors.SECONDARY_RED}
            style={{position: 'absolute', right: 0}}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <View>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            onPress={navigation.goBack}
            style={{position: 'absolute', left: 2, color: Colors.DEFAULT_GREEN}}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            Thiết lập tài khoản
          </Text>

          <View style={{right: 20, position: 'absolute'}}>
            <Icon name="settings" size={30} style={styles.icon} />
          </View>
        </View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: '500',
            color: Colors.DEFAULT_GREEN,
          }}>
          Tài khoản của tôi
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          data={setting1}
          renderItem={({item}) => <CartCard item={item} />}
        />
        <Text
          style={{
            paddingTop: 18,
            fontSize: 19,
            fontWeight: '500',
            color: Colors.DEFAULT_GREEN,
          }}>
          Cài đặt
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          data={setting2}
          renderItem={({item}) => <CartCard item={item} />}
        />
        <Text
          style={{
            paddingTop: 18,
            fontSize: 19,
            fontWeight: '500',
            color: Colors.DEFAULT_GREEN,
          }}>
          Hỗ trợ
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          data={setting3}
          renderItem={({item}) => <CartCard item={item} />}
        />
        {/* Đăng xuất */}
        <View style={{bottom: -20, marginHorizontal: 20}}>
          <SecondaryButton
            title="ĐĂNG XUẤT"
            onPress={() =>
              Alert.alert(
                'Xác nhận',
                'Hành động này giúp bạn đăng xuất tài khoản khỏi hệ thống',
                [
                  {
                    text: 'Đăng xuất',
                    onPress: () => navigation.navigate('Options'),
                  },
                  {text: 'Huỷ bỏ', onPress: () => {}},
                ],
              )
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 20,
    paddingVertical: 20,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Colors.DEFAULT_GREEN,
  },
});
