/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Alert,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Display} from '@utils';
import {Colors} from '@constants';
import {Button, Loader, Input} from '@components';

const RegisterScreen = ({navigation}: any) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    } else if (
      !inputs.fullname.match(
        /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/,
      )
    ) {
      handleError('Please input right format fullname', 'fullname');
      isValid = false;
    }
    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    } else if (
      !inputs.phone.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
    ) {
      handleError('Please input right phone', 'fullname');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password must be larger 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('SignIn');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
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
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{
          paddingTop: Display.setWidth(5),
          paddingHorizontal: 20,
          paddingBottom: Display.setWidth(20),
        }}>
        <Text
          style={{
            color: Colors.DEFAULT_GREEN,
            fontSize: Display.setWidth(8),
            fontWeight: 'bold',
          }}>
          Đăng ký
        </Text>
        <Text
          style={{
            color: Colors.DEFAULT_GREEN,
            fontSize: 18,
            marginVertical: Display.setWidth(1),
          }}>
          Hãy nhập thông tin để tiến hành đăng ký
        </Text>
        <View style={{marginVertical: Display.setWidth(1)}}>
          <Input
            onChangeText={(text: string) => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Nhập email của bạn"
            error={errors.email}
          />

          <Input
            onChangeText={(text: string) => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Nhập tên đầy đủ của bạn"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={(text: string) => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Nhập số điện thoại của bạn"
            error={errors.phone}
          />
          <Input
            onChangeText={(text: string) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Nhập mật khẩu của bạn"
            error={errors.password}
            password
          />
          <Button title="Đăng ký" onPress={validate} />
          <Text
            onPress={navigation.goBack}
            style={{
              color: Colors.DEFAULT_YELLOW,
              fontWeight: '700',
              textAlign: 'center',
              fontSize: 18,
            }}>
            Bạn đã có tài khoản? Đăng nhập
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
