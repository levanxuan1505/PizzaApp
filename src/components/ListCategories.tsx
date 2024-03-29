/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Display} from '@utils';
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
                  height: Display.setHeight(3),
                  width: Display.setHeight(3),
                  resizeMode: 'cover',
                  borderRadius: 30,
                }}
              />
            </View>
            <Text
              style={{
                fontSize: Display.setWidth(7.8) / 2,
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
    paddingVertical: Display.setWidth(3.2),
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: Display.setWidth(11),
    width: Display.setWidth(35),
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: Display.setHeight(3.6),
    width: Display.setHeight(3.6),
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default memo(ListCategories);
