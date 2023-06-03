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
  ReviewScreen,
  WaitForGoodsScreen,
  DetailsCardScreen,
  DeliveryScreen,
  DetailsOptionScreen,
  NotificationScreen,
  EditLocationScreen,
  CreateAddressScreen,
  HistoryBuyScreen,
  OrderConfirmScreen,
  OrderConfirmDetailScreen,
  ChatScreen,
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
        <Stack.Screen name="HistoryBuy" component={HistoryBuyScreen} />
        <Stack.Screen name="Edit" component={EditProfileScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="WaitForGoods" component={WaitForGoodsScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Order" component={OrderConfirmScreen} />
        <Stack.Screen name="OrderDetail" component={OrderConfirmDetailScreen} />
        <Stack.Screen name="CreateAddress" component={CreateAddressScreen} />
        <Stack.Screen name="DetailCard" component={DetailsCardScreen} />
        <Stack.Screen name="DetailOption" component={DetailsOptionScreen} />
        <Stack.Screen name="Voucher" component={VoucherScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
