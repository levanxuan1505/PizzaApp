/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Colors} from '../constants';
import {FlatList} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import notification from '../constants/Notification';

export default function NotificationScreen({navigation}) {
  const showAlert = () =>
    Alert.alert('Thông báo', 'Bạn chắc chắn muốn xoá thông báo này', [
      {text: 'Yes', onPress: () => {}},
      {text: 'No', onPress: () => {}},
    ]);
  const CartCard = ({item}: any) => {
    return (
      <TouchableOpacity>
        <View style={styles.cartCard}>
          <Image
            source={item.image}
            style={{height: 50, width: 50, borderRadius: 50}}
          />
          <View
            style={{
              height: 100,
              marginLeft: 10,
              paddingTop: 25,
              flex: 1,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: Colors.DEFAULT_GREEN,
              }}>
              {item.name}
            </Text>
            <Text style={{fontSize: 13, color: Colors.DEFAULT_GREY}}>
              {item.title}
            </Text>
          </View>
          <TouchableOpacity onPress={showAlert}>
            <View style={{marginRight: 16, alignItems: 'center'}}>
              <Iconss name="trash" size={28} color={Colors.DEFAULT_GREEN} />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      {/* header */}
      <View style={styles.header}>
        <Icons
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
          Notification
        </Text>
        <View style={{position: 'absolute', right: 24}}>
          <IconBadge
            MainElement={
              <View>
                <Icon name="bell" size={32} color={Colors.DEFAULT_GREEN} />
              </View>
            }
            BadgeElement={<Text style={{color: '#FFFFFF'}}>3</Text>}
            IconBadgeStyle={{
              marginRight: -5,
              marginTop: -6,
              width: 17,
              height: 20,
              backgroundColor: 'red',
            }}
            // Hidden={this.state.BadgeCount == 0}
          />
        </View>
      </View>
      {/* header */}

      {/* FlastList */}
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={notification}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
      />
      {/* FlastList */}
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
});
