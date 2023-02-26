/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Colors} from '../constants';
const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: Colors.DEFAULT_GREEN,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{color: Colors.DEFAULT_WHITE, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
