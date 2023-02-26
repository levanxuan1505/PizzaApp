/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? Colors.DEFAULT_RED
              : isFocused
              ? Colors.DEFAULT_GREEN
              : Colors.LIGHT_GREY,
            alignItems: 'center',
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: Colors.DEFAULT_GREEN, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: Colors.SECONDARY_BLACK, flex: 1}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: Colors.DEFAULT_GREEN, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: Colors.DEFAULT_RED, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: Colors.DEFAULT_GREEN,
  },
  inputContainer: {
    height: 55,
    backgroundColor: Colors.DEFAULT_WHITE,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default Input;
