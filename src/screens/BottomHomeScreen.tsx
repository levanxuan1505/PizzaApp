/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Platform} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';
import {Colors} from '@constants';
import CartScreen from './CartScreen';
import Search from './Search';
import BookmarkScreen from './BookmarkScreen';
import ProfileScreen from './ProfileScreen';
// redux
import {useSelector} from 'react-redux';
//
const Tab = createBottomTabNavigator();

export default function BottomHomeScreen() {
  const notification = useSelector((state: any) => state.notification);
  const badgeHome = notification.length;
  const cart = useSelector((state: any) => state.cart);
  const bookmark = useSelector((state: any) => state.bookmark);
  const badgeBookmark = bookmark.length;
  const badgeCart = cart.length;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.DEFAULT_GREEN,
        tabBarShowLabel: false,
        tabBarStyle: [
          {display: 'flex', paddingTop: 3, borderTopWidth: 0},
          null,
        ],
      }}
      // bản cũ sẽ dùng tabBarOptions
      // tabBarOptions={{
      //   style: {
      //     height: 55,
      //     borderTopWidth: 0,
      //     elevation: 0,
      //   },
      //   showLabel: false,
      //   activeTintColor: Colors.DEFAULT_GREEN,
      // }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarBadge: badgeHome ? badgeHome : null,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="home-filled" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: badgeCart ? badgeCart : null,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 70,
                width: 70,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 4,
                borderRadius: 40,
                backgroundColor: Colors.DEFAULT_WHITE,
                borderColor: {color} ? color : Colors.DEFAULT_WHITE,
                top: Platform.OS === 'ios' ? -10 : -16,
                elevation: 5,
              }}>
              <Icon name="search" size={28} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarBadge: badgeBookmark ? badgeBookmark : null,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="bookmarks" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarBadge: badgeHome ? badgeHome : null,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="supervised-user-circle" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
