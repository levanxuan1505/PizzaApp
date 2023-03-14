/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import {Colors} from '@constants';
import {Categories} from '@constants';
import {useDispatch} from 'react-redux';
import {addFood} from '../redux/foodSlice';
import {useSelector} from 'react-redux';
const ListCategories = () => {
  const dispatch = useDispatch();
  const indexCategory = useSelector((state: any) => state.food);
  const handleAction = (index: any) => {
    dispatch(addFood({id: index}));
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesListContainer}>
      {Categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => handleAction(index)}>
          <View
            style={{
              backgroundColor:
                indexCategory[0].id === index
                  ? Colors.DEFAULT_GREEN
                  : Colors.DEFAULT_WHITE,
              ...styles.categoryBtn,
            }}>
            <View style={styles.categoryBtnImgCon}>
              <Image
                source={category.image}
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'cover',
                  borderRadius: 30,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 10,
                color:
                  indexCategory[0].id === index
                    ? Colors.DEFAULT_WHITE
                    : Colors.DEFAULT_YELLOW,
              }}>
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  categoriesListContainer: {
    paddingVertical: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 126,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default memo(ListCategories);
