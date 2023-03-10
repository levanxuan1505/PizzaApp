import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Options,
  SignInScreen,
  PaymentScreen,
  WelcomeScreen,
  VoucherScreen,
  SettingScreen,
  LocationScreen,
  CheckoutScreen,
  RegisterScreen,
  BottomHomeScreen,
  EditProfileScreen,
  DetailsCardScreen,
  NotificationScreen,
  EditLocationScreen,
  CreateAddressScreen,
  OrderConfirmScreen,
} from '@screens';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="BottomHome" component={BottomHomeScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Local" component={LocationScreen} />
        <Stack.Screen name="EditLocation" component={EditLocationScreen} />
        <Stack.Screen name="Edit" component={EditProfileScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Order" component={OrderConfirmScreen} />
        <Stack.Screen name="CreateAddress" component={CreateAddressScreen} />
        <Stack.Screen name="DetailCard" component={DetailsCardScreen} />
        <Stack.Screen name="Voucher" component={VoucherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
