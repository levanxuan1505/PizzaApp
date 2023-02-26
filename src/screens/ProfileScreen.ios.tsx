/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconBadge from 'react-native-icon-badge';
import {Colors} from '@constants';

export default function ProfileScreen({navigation}: any) {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <View>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={20}
            style={styles.icon}
            onPress={navigation.goBack}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            Profile
          </Text>
          <TouchableOpacity
            style={styles.bell}
            onPress={() => navigation.navigate('Notification')}>
            <IconBadge
              MainElement={
                <View>
                  <Icons name="bell" size={32} style={styles.icon} />
                </View>
              }
              BadgeElement={<Text style={{color: '#FFFFFF'}}>5</Text>}
              IconBadgeStyle={{
                marginRight: -7,
                marginTop: -2,
                width: 17,
                height: 20,
                backgroundColor: 'red',
              }}
              // Hidden={this.state.BadgeCount == 0}
            />
          </TouchableOpacity>
        </View>
        {/* information */}
        <View style={styles.information}>
          <Image
            source={require('../assets/images/avatar.webp')}
            style={{height: 110, width: 110, borderRadius: 50}}
          />
          <View style={{marginTop: 32, right: 65}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: Colors.DEFAULT_GREEN,
              }}>
              Lê Văn Xuân
            </Text>
            <Text style={{fontSize: 15, color: Colors.DEFAULT_GREEN}}>
              Mobile App Developer
            </Text>
          </View>
        </View>
        {/* phone  */}
        <View style={{marginTop: 12}}>
          <View style={styles.contact}>
            <Icon name="local-phone" size={28} color={Colors.DEFAULT_GREEN} />
            <Text
              style={{
                color: Colors.DEFAULT_GREEN,
                fontSize: 18,
                paddingHorizontal: 10,
              }}>
              (+84)975***546
            </Text>
          </View>
          <View style={styles.contact}>
            <Icons
              name="email-receive-outline"
              size={28}
              color={Colors.DEFAULT_GREEN}
            />
            <Text
              style={{
                color: Colors.DEFAULT_GREEN,
                fontSize: 18,
                paddingHorizontal: 10,
              }}>
              levanxuan1**5@gmail.com
            </Text>
          </View>
        </View>
        {/* Wallet */}
        <View style={styles.wallet}>
          <View style={{}}>
            <Text style={{fontSize: 25, color: Colors.DEFAULT_GREEN}}>
              99.999K
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: Colors.DEFAULT_GREEN,
                paddingLeft: 40,
              }}>
              Ví
            </Text>
          </View>

          <View style={{}}>
            <Text
              style={{
                fontSize: 25,
                color: Colors.DEFAULT_GREEN,
                paddingLeft: 15,
              }}>
              12
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: Colors.DEFAULT_GREEN,
                paddingRight: 20,
              }}>
              Đơn hàng
            </Text>
          </View>
        </View>
        {/* Options */}

        <View>
          <View style={styles.options}>
            <Icons name="heart" size={28} color={Colors.DEFAULT_GREEN} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                color: Colors.DEFAULT_GREEN,
              }}>
              Bookmark
            </Text>
          </View>
          <View style={styles.options}>
            <Icon name="payment" size={28} color={Colors.DEFAULT_GREEN} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                color: Colors.DEFAULT_GREEN,
              }}>
              Thanh toán
            </Text>
          </View>
          <View style={styles.options}>
            <Icon name="people" size={28} color={Colors.DEFAULT_GREEN} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                color: Colors.DEFAULT_GREEN,
              }}>
              People
            </Text>
          </View>
          <View style={styles.options}>
            <Icons
              name="tag-multiple-outline"
              size={28}
              color={Colors.DEFAULT_GREEN}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                color: Colors.DEFAULT_GREEN,
              }}>
              Khuyến mãi
            </Text>
          </View>
          <View style={styles.options}>
            <Icon name="settings" size={28} color={Colors.DEFAULT_GREEN} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 18,
                color: Colors.DEFAULT_GREEN,
              }}>
              Cài đặt
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Xác nhận', 'Bạn muốn đăng xuất', [
              {text: 'Xác nhận', onPress: () => navigation.navigate('Options')},
              {text: 'Huỷ bỏ', onPress: () => {}},
            ])
          }
          // onPress={() => navigation.navigate('Options')}
          style={{
            width: '100%',
            height: 60,
            backgroundColor: Colors.DEFAULT_GREEN,
            borderRadius: 50,
            // marginTop: 85,
            marginBottom: 10,
          }}>
          <View style={styles.logOut}>
            <Icons
              name="account-arrow-left-outline"
              size={32}
              color={Colors.DEFAULT_WHITE}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                marginLeft: 5,
                color: Colors.DEFAULT_WHITE,
              }}>
              Đăng xuất
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contact: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  wallet: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: Colors.DEFAULT_GREEN,
    paddingVertical: 25,
    marginBottom: 10,
    marginTop: 10,
  },
  options: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
    paddingVertical: 8,
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bell: {
    color: Colors.DEFAULT_GREEN,
    left: 225,
  },
  icon: {
    color: Colors.DEFAULT_GREEN,
  },
  logOut: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
