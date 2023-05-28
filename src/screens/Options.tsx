/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Display} from '@utils';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, Images} from '@constants';
import styles from '@css/OptionScreenStyle';
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
            onPress={() => navigation.replace('BottomHome', {data: 'Xuaan'})}>
            <Icon
              name="home"
              size={Display.setWidth(6)}
              color={Colors.DEFAULT_WHITE}
            />
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
              size={Display.setWidth(8)}
              color={Colors.DEFAULT_WHITE}
            />
            <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
