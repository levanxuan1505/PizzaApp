/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@constants';
import {SecondaryButton} from '@components';

const DetailsCardScreen = ({navigation, route}: any) => {
  const item = route.params;
  const [heart, setHeart] = useState(true);
  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE}}>
      <View style={style.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          onPress={navigation.goBack}
          color={Colors.DEFAULT_GREEN}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Details
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: Colors.DEFAULT_WHITE,
              }}>
              {item.name}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setHeart(!heart);
              }}>
              <View style={style.iconContainer}>
                <Icons
                  name={heart ? 'heart' : 'heart-dislike-sharp'}
                  color={Colors.DEFAULT_GREEN}
                  size={25}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={style.detailsText}>{item.title}</Text>
          <View style={{paddingTop: 20}}>
            <SecondaryButton
              title="Add To Cart"
              onPress={() =>
                Alert.alert('Xác nhận', 'Thêm món ăn vào giỏ hàng', [
                  {text: 'Xác nhận', onPress: () => {}},
                  {text: 'Huỷ bỏ', onPress: () => {}},
                ])
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 0 : 30,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 100,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: Colors.DEFAULT_WHITE,
  },
});

export default DetailsCardScreen;
