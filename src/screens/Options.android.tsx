import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
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
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.buttonHome}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('ButtonHome')}>
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
  buttonHome: {
    alignItems: 'center',
    backgroundColor: '#037E3F',
    margin: 40,
    height: 70,
    top: 350,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonSignIn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBA83C',
    margin: 40,
    height: 70,
    top: 320,
    borderRadius: 50,
  },
  buttonText: {
    top: 19,
    paddingBottom: 40,
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
    textShadowColor: 'rgba(0, 0, 0, 5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    color: '#ffff',
  },
});
