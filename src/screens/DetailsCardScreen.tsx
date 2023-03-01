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
// import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@constants';
import {SecondaryButton} from '@components';

import {ScrollView} from 'react-native-gesture-handler';

const DetailsCardScreen = ({navigation, route, heartValue}: any) => {
  const item = route.params;
  const [heart, setHeart] = useState(!heartValue);
  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          onPress={navigation.goBack}
          color={Colors.DEFAULT_GREEN}
          style={{position: 'absolute', left: 2}}
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
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        <View style={styles.details}>
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
              <View style={styles.iconContainer}>
                <Icons
                  name={heartValue ? 'heart' : 'heart-dislike-sharp'}
                  color={Colors.DEFAULT_GREEN}
                  size={25}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.detailsText}>{item.title}</Text>
        </View>
      </ScrollView>
      <View style={styles.total}>
        <SecondaryButton
          title="Thêm vào giỏ hàng"
          onPress={() =>
            Alert.alert('Xác nhận', 'Thêm món ăn vào giỏ hàng', [
              {
                text: 'Thêm',
                onPress: () => {},
              },
              {text: 'Huỷ bỏ', onPress: () => {}},
            ])
          }
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 0 : 30,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: Platform.OS === 'ios' ? 100 : 80,
    backgroundColor: Colors.DEFAULT_GREEN,
    // borderRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
  total: {
    backgroundColor: Colors.DEFAULT_GREEN,
    marginBottom: Platform.OS === 'ios' ? -38 : 0,
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 40 : 15,
  },
  button: {
    paddingVertical: 10,
    marginHorizontal: 20,
  },
});

export default DetailsCardScreen;
