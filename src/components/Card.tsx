/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  Modal,
  Image,
  Animated,
  Platform,
  LogBox,
  FlatList,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  RefreshControl,
  TouchableHighlight,
} from 'react-native';
import {Colors} from '@constants';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
LogBox.ignoreLogs(['Sending...']);
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
// import {Colors} from '@constants';
// import styles from '@css/HomeScreenStyle';
import {foodList} from '@constants';
import {ListCategories, ConditionToAdd, Header} from '@components';
// redux import
import {useSelector} from 'react-redux';
//
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
            style={{height: 130, width: 130, borderRadius: 70}}
          />
        </View>
        <View style={{marginHorizontal: 15, top: -10}}>
          <Text
            style={{
              fontSize: Platform.OS === 'ios' ? 17.4 : 13,
              fontWeight: Platform.OS === 'ios' ? 'bold' : '800',
              color: Colors.DEFAULT_GREEN,
            }}>
            {food.name}
          </Text>
          <Text
            style={{fontSize: 15, color: Colors.DEFAULT_GREY, marginTop: 2}}>
            {food.ingredients}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.price}k</Text>

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
    height: 220,
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
    right: -11,
    top: -22,
    height: 52,
    width: 52,
    borderRadius: 30,
    backgroundColor: Colors.DEFAULT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Card;
