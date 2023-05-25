import React from 'react';
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import {Display} from '../utils';
import {Images} from '../constants';

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images[image]} resizeMode="cover" />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Display.setWidth(100),
    // backgroundColor: 'red',
  },
  image: {
    marginTop: Display.setWidth(10),
    height:
      Platform.OS === 'ios' ? Display.setHeight(41) : Display.setHeight(37),
    width: Platform.OS === 'ios' ? Display.setWidth(78) : Display.setWidth(68),
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  titleText: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: '600',
    color: '#037E3F',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
  contentText: {
    marginTop: 10,
    fontSize: Platform.OS === 'ios' ? 22 : 20,
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#037E3F',
  },
});

export default WelcomeCard;
