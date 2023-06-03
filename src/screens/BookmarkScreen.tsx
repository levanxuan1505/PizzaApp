/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
// import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';

import {Colors} from '@constants';
import styles from '@css/BookmarkScreenStyle';
// redux import
import {useDispatch, useSelector} from 'react-redux';
import {deleteBookmark} from '../redux/bookmarkSlice';
import {Display} from '@utils';
//

const BookmarkScreen = ({navigation}: any) => {
  //redux Using
  const bookmark = useSelector((state: any) => state.bookmark);
  const user = useSelector((state: any) => state.user);
  const condition = user[0].userName && bookmark.length;
  const dispatch = useDispatch();
  //
  const CartCard = ({item}: any) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => navigation.navigate('DetailCard', item)}>
        <View style={styles.cartCard}>
          <Image
            source={item.image}
            style={{height: 80, width: 80, borderRadius: 50}}
          />
          <View
            style={{
              height: 100,
              marginLeft: 10,
              paddingVertical: 20,
              flex: 1,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
            <Text style={{fontSize: 13, color: Colors.DEFAULT_GREY}}>
              {item.ingredients}
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              {item.price}k
            </Text>
          </View>
          <View style={{marginRight: 25, alignItems: 'center'}}>
            <TouchableHighlight>
              <Icons
                onPress={() => dispatch(deleteBookmark({id: item.id}))}
                name="heart-dislike-sharp"
                size={32}
                color={Colors.DEFAULT_GREEN}
              />
            </TouchableHighlight>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return !condition ? (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={Display.setWidth(7)}
          onPress={navigation.goBack}
          color={Colors.DEFAULT_GREEN}
          style={{position: 'absolute', left: 2}}
        />
        <Text
          style={{
            fontSize: Display.setWidth(6),
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Bookmark
        </Text>
        <View style={{position: 'absolute', right: Display.setWidth(1)}}>
          <Icons
            name="heart"
            size={32}
            color={Colors.DEFAULT_GREEN}
            style={{
              marginRight: Platform.OS === 'ios' ? 20 : 18,
              alignItems: 'center',
            }}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Text
          style={{
            fontSize: Display.setWidth(8) - 14,
            fontWeight: '700',
            color: Colors.DEFAULT_RED,
          }}>
          Không có món ăn nào để hiện thị
        </Text>
      </View>
    </SafeAreaView>
  ) : (
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
          Bookmark
        </Text>
        <View style={{position: 'absolute', right: 15}}>
          <Icons
            name="heart"
            size={32}
            color={Colors.DEFAULT_GREEN}
            style={{
              marginRight: Platform.OS === 'ios' ? 20 : 18,
              alignItems: 'center',
            }}
          />
        </View>
      </View>

      <FlashList
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={bookmark}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
      />
    </SafeAreaView>
  );
};
export default BookmarkScreen;
