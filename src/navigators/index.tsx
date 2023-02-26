import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen, Options, SignInScreen} from '../screens';
import BottomHomeScreen from '../screens/BottomHomeScreen';
import DetailCardScreen from '../screens/DetailCardScreen';
import CartScreen from '../screens/CartScreen';
import Search from '../screens/Search';
import RegisterScreen from '../screens/RegisterScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import EditProfileScreen from '../screens/EditProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'ButtonHome';

  switch (routeName) {
    case 'Home':
      return 'News Home';
    case 'Search':
      return 'My Search';
    case 'Card':
      return 'My Card';
    case 'Bookmark':
      return 'My Bookmark';
    case 'Profile':
      return 'My Profile';
  }
}
const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen
          name="ButtonHome"
          component={BottomHomeScreen}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
        {/* <Stack.Screen name="Cart" component={CartScreen} /> */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        {/* <Stack.Screen name="Search" component={Search} /> */}
        <Stack.Screen name="Edit" component={EditProfileScreen} />
        <Stack.Screen name="DetailCard" component={DetailCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
