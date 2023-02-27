/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-virtualized-view';
import {Colors, locations} from '@constants';
export default function LocationScreen({navigation}) {
  const CartCard = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailCard', item)}>
        <View style={styles.cartCard}>
          <View
            style={{
              height: 100,
              marginLeft: 10,
              paddingVertical: 20,
              // flex: 1,
            }}>
            <View style={{flexDirection: 'row', paddingBottom: 5}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 15,
                  color: Colors.DEFAULT_GREEN,
                }}>
                {item.name}
              </Text>
              <Text style={{fontSize: 13, color: Colors.DARK_FOUR}}>
                {item.phone}
              </Text>
            </View>
            <View style={{}}>
              <Text style={{fontSize: 13, fontWeight: '400'}}>
                {item.dress}
              </Text>
              <Text
                style={{fontWeight: '400', fontSize: 13, marginVertical: 5}}>
                {item.title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
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
            paddingHorizontal: 82,
          }}>
          Địa chỉ của Tôi
        </Text>
      </View>
      {/* location */}
      <View>
        <Text
          style={{
            paddingLeft: 22,
            fontSize: 18,
            color: Colors.DEFAULT_GREEN,
            paddingBottom: 10,
          }}>
          Địa chỉ
        </Text>
        {/* FlashList */}
        <ScrollView>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 80}}
            data={locations}
            renderItem={({item}) => <CartCard item={item} />}
            ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          />
          <View style={styles.addBtn}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 9,
              }}>
              <Icon
                name="add-circle-outline"
                size={32}
                color={Colors.DEFAULT_GREEN}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.DEFAULT_GREEN,
                  paddingHorizontal: 5,
                }}>
                Thêm địa chỉ mới
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  addBtn: {
    borderRadius: 10,
    height: 60,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
});
