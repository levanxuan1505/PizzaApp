/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Alert,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Colors} from '@constants';
import {Button, Input, Loader} from '@components';
export interface ISignUpData {
  email: string;
  password: string;
}
const SignInScreen = ({navigation}: any) => {
  const [inputs, setInputs] = useState<ISignUpData>({email: '', password: ''});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email === userData?.email &&
          inputs.password === userData?.password
        ) {
          navigation.navigate('ButtonHome');
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({...userData, loggedIn: true}),
          );
        } else {
          Alert.alert('Error', 'Invalid Details');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
      }
    }, 3000);
  };

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error: any, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <Loader visible={loading} />
      <View style={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text
          style={{
            color: Colors.DEFAULT_GREEN,
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          Sign In
        </Text>
        <Text
          style={{
            color: Colors.DEFAULT_GREEN,
            fontSize: 18,
            marginVertical: 10,
          }}>
          Enter Your Details to Sign in
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={(text: string) => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />
          <Input
            onChangeText={(text: string) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title="Sign In" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('Register')}
            style={{
              color: Colors.SECONDARY_BLACK,
              fontWeight: '600',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Don't have account? Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
