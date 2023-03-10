/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  Platform,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-virtualized-view';
import styles from '@css/LocationScreenStyle';
import {Colors, locations} from '@constants';
// redux import
import {useDispatch, useSelector} from 'react-redux';
//
import {changeLocation} from '../redux/locationSlice';

export default function LocationScreen({navigation}: any) {
  // redux
  const dispatch = useDispatch();
  const touch = useSelector((state: any) => state.location);
  //
  const CartCard = ({item}: any) => {
    const local: any = item;
    return (
      <TouchableOpacity
        onPress={() =>
          dispatch(
            changeLocation({
              id: local.id,
              name: local.name,
              phone: local.phone,
              dress: local.dress,
              title: local.title,
            }),
          )
        }>
        <View
          style={[
            styles.cartCard,
            {
              backgroundColor:
                touch[0].id === item.id
                  ? Colors.LIGHT_GREEN
                  : Colors.DEFAULT_WHITE,
            },
          ]}>
          <View
            style={{
              height: Platform.OS === 'ios' ? 100 : 120,
              marginLeft: 10,
              paddingVertical: 20,
              justifyContent: 'center',
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
                | {item.phone}
              </Text>
            </View>
            <View style={{position: 'relative'}}>
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 13 : 12,
                  fontWeight: '400',
                }}>
                {item.dress}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: Platform.OS === 'ios' ? 13 : 12,
                  marginVertical: 5,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: Colors.DEFAULT_YELLOW,
                  fontSize: Platform.OS === 'ios' ? 13 : 11,
                  fontWeight: '500',
                  bottom: -11,
                  position: 'absolute',
                }}>
                {item.id === '1' ? 'M???c ?????nh' : ''}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditLocation', item);
            }}
            style={{
              position: 'absolute',
              right: 15,
              padding: 10,
            }}>
            <Icon
              size={16}
              name="arrow-forward-ios"
              style={{
                color: Colors.DEFAULT_GREEN,
              }}
            />
          </TouchableOpacity>
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
          style={{
            position: 'absolute',
            left: 5,
          }}
        />
        <Text
          style={{
            fontSize: Platform.OS === 'ios' ? 20 : 18,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
            paddingHorizontal: 100,
          }}>
          ?????a ch??? c???a T??i
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
          ?????a ch???
        </Text>
        {Platform.OS === 'ios' ? (
          <ScrollView>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 80}}
              data={locations}
              renderItem={({item}) => <CartCard item={item} />}
              ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
            />
            <TouchableOpacity
              style={{marginBottom: 10}}
              onPress={navigation.goBack}>
              <View
                style={[
                  styles.addBtn,
                  {backgroundColor: Colors.DEFAULT_WHITE},
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 9,
                  }}>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: '600',
                      color: Colors.DEFAULT_GREEN,
                      paddingHorizontal: 5,
                    }}>
                    Ch???n ?????a Ch???
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity
              style={{marginBottom: 200}}
              onPress={() => navigation.navigate('CreateAddress')}>
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
                      fontSize: 22,
                      fontWeight: '500',
                      color: Colors.DEFAULT_GREEN,
                      paddingHorizontal: 5,
                    }}>
                    Th??m ?????a ch??? m???i
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          // android
          <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: 100}}
              data={locations}
              renderItem={({item}) => <CartCard item={item} />}
              ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
            />
            <TouchableOpacity
              style={{marginBottom: 10, marginTop: 0}}
              onPress={navigation.goBack}>
              <View
                style={[
                  styles.addBtn,
                  {backgroundColor: Colors.DEFAULT_WHITE},
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 9,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '600',
                      color: Colors.DEFAULT_GREEN,
                      paddingHorizontal: 5,
                    }}>
                    Ch???n ?????a Ch???
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity
              style={{marginBottom: 350}}
              onPress={() => navigation.navigate('CreateAddress')}>
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
                      fontSize: 22,
                      fontWeight: '500',
                      color: Colors.DEFAULT_GREEN,
                      paddingHorizontal: 5,
                    }}>
                    {/* {name.names[3]} */}
                    Th??m ?????a ch??? m???i
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
