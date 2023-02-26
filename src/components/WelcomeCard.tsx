import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
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
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidth(60),
    borderWidth: 5,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  titleText: {
    marginTop: 30,
    fontSize: 28,
    color: '#037E3F',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
  },
  contentText: {
    marginTop: 10,
    fontSize: 22,
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#037E3F',
  },
});

export default WelcomeCard;
