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
import {useDispatch} from 'react-redux';
import {Colors} from '@constants';
import {Button, Input, Loader} from '@components';
import {changeName} from '../redux/userSlice';
export interface ISignUpData {
  email: string;
  password: string;
}
const SignInScreen = ({navigation}: any) => {
  const [inputs, setInputs] = useState<ISignUpData>({email: '', password: ''});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
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
          dispatch(changeName({userName: userData.fullname}));
          navigation.navigate('BottomHome');
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
          ????ng nh???p
        </Text>
        <Text
          style={{
            color: Colors.DEFAULT_GREEN,
            fontSize: 18,
            marginVertical: 10,
          }}>
          Nh???p th??ng tin ????? ????ng nh???p
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={(text: string) => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Nh???p email c???a b???n"
            error={errors.email}
          />
          <Input
            onChangeText={(text: string) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Nh???p m???t kh???u c???a b???n"
            error={errors.password}
            password
          />
          <Button title="????ng nh???p" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('Register')}
            style={{
              color: Colors.DEFAULT_YELLOW,
              fontWeight: '700',
              textAlign: 'center',
              fontSize: 18,
            }}>
            B???n ch??a c?? t??i kho???n? ????ng k?? ngay
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
