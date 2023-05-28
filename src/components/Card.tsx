/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  Image,
  LogBox,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableHighlight,
} from 'react-native';
import {Display} from '@utils';
import {Colors} from '@constants';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
LogBox.ignoreLogs(['Sending...']);
import React, {memo} from 'react';
import {ConditionToAdd} from '@components';
const Card = ({navigation, food}) => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      activeOpacity={0.9}
      onPress={() => navigation.navigate('DetailCard', food)}>
      <View style={styles.card}>
        <View style={{alignItems: 'center', top: -30}}>
          <Image
            source={food.image}
            style={{
              height: Display.setWidth(30),
              width: Display.setWidth(30),
              borderRadius: 70,
              borderWidth: 3,
              borderColor: Colors.DEFAULT_GREEN,
            }}
          />
        </View>
        <View style={{marginHorizontal: Display.setHeight(3) / 2.2, top: -10}}>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? Display.setWidth(7) - 12.5 : 13,
              fontWeight: Platform.OS === 'ios' ? 'bold' : '800',
              color: Colors.DEFAULT_GREEN,
            }}>
            {food.name}
          </Text>
          <Text
            style={{
              fontSize: Display.setHeight(1.7),
              color: Colors.DEFAULT_GREY,
              marginTop: 2,
            }}>
            {food.ingredients}
          </Text>
        </View>
        <View
          style={{
            marginTop: 5,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <Text style={{fontSize: Display.setWidth(4.5), fontWeight: 'bold'}}>
            {food.price}k
          </Text>

          <View style={styles.addToCartBtn}>
            <ConditionToAdd navigation={navigation} food={food} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  card: {
    // height: 220,
    height: Display.setWidth(51),
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: Platform.OS === 'ios' ? 25 : 35,
    borderRadius: 15,
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#000',
    position: 'relative',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  addToCartBtn: {
    position: 'absolute',
    right: -8,
    top: -18,
    height: Display.setWidth(11),
    width: Display.setWidth(11),
    borderRadius: 30,
    backgroundColor: Colors.DEFAULT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default memo(Card);
