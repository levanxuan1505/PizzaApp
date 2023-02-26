/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@constants';

export default function ProfileScreen({navigation}: any) {
  return (
    <SafeAreaView style={{marginHorizontal: 20, flex: 1}}>
      <View style={{flex: 1}}>
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
          <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
            <Icons name="account-edit-outline" size={32} style={styles.icons} />
          </TouchableOpacity>
        </View>
        {/* information */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          //   persistentScrollbar={false}
          style={styles.info}>
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
                $99.999
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.DEFAULT_GREEN,
                  paddingLeft: 25,
                }}>
                Wallet
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
                  paddingRight: 30,
                }}>
                Orders
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
                Your Favorites
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
                Payment
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
                Tell Your Friend
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
                Promotions
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
                Settings
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Options')}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: Colors.DEFAULT_GREEN,
              borderRadius: 50,
              marginBottom: 40,
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
                Log out
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
  info: {flex: 1},
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
  icon: {
    color: Colors.DEFAULT_GREEN,
  },
  icons: {
    color: Colors.DEFAULT_GREEN,
    marginLeft: 250,
  },
  logOut: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
