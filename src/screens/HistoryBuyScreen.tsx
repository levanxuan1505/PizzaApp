/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
import {
  Text,
  View,
  Image,
  Platform,
  LogBox,
  FlatList,
  StatusBar,
  SafeAreaView,
  RefreshControl,
  TouchableHighlight,
} from 'react-native';

LogBox.ignoreLogs(['Sending...']);
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/FontAwesome';
import {Colors} from '@constants';
import styles from '@css/HistoryBuyScreenStyle';
import {foodList} from '@constants';

import {HistoryBuy} from '@components';
// redux import
import {useSelector} from 'react-redux';
//
export default function HistoryBuyScreen({navigation}: any) {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);
  // redux
  const food = useSelector((state: any) => state.food);
  const Card = ({food}: any) => {
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
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {food.price}k
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.DEFAULT_WHITE}}>
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
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
          Lịch sử mua hàng
        </Text>
        <View style={{position: 'absolute', right: 15}}>
          <Iconss
            name="history"
            size={32}
            color={Colors.DEFAULT_GREEN}
            style={{
              marginRight: Platform.OS === 'ios' ? 20 : 18,
              alignItems: 'center',
            }}
          />
        </View>
      </View>
      <View>
        <HistoryBuy />
      </View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        numColumns={1}
        style={{paddingTop: 10}}
        data={foodList[food[0].id]}
        renderItem={({item}) => <Card navigation={navigation} food={item} />}
      />
    </SafeAreaView>
  );
}
