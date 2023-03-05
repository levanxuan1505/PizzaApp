/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, Images} from '@constants';
export default function Options({navigation}: any) {
  return (
    <ImageBackground
      source={Images.BACKGROUND}
      resizeMode="cover"
      style={styles.backgroundImage}>
      <StatusBar barStyle="light-content" hidden={false} translucent={true} />
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Images.SPLASH} style={styles.image} />
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonHome}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('BottomHome')}>
            <Icon name="home" size={32} color={Colors.DEFAULT_WHITE} />
            <Text style={styles.buttonText}>HOME</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonSignIn}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('SignIn')}>
            <Icon
              name="log-in-outline"
              size={32}
              color={Colors.DEFAULT_WHITE}
            />
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    marginTop: Platform.OS === 'ios' ? 300 : 180,
    height: 240,
    width: 376,
  },
  buttonHome: {
    backgroundColor: Colors.DEFAULT_GREEN,
    marginHorizontal: 40,
    marginVertical: 25,
    height: 70,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSignIn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DEFAULT_YELLOW,
    marginHorizontal: 40,
    height: 70,
    borderRadius: 50,
  },
  buttonText: {
    top: 21,
    paddingBottom: 40,
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
    textShadowColor: 'rgba(0, 0, 0, 5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 7,
    color: '#ffff',
  },
});
