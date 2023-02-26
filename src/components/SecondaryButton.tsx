import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {Colors} from '../constants';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={{...style.btnContainer, backgroundColor: Colors.DEFAULT_WHITE}}>
        <Text style={{...style.title, color: Colors.DEFAULT_GREEN}}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {color: Colors.DEFAULT_WHITE, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: Colors.DEFAULT_GREEN,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {PrimaryButton, SecondaryButton};
