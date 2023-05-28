/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import {Colors} from '@constants';
import {historyBuy} from '@constants';
import {useDispatch} from 'react-redux';
import {addFood} from '../redux/foodSlice';
import {useSelector} from 'react-redux';

const HistoryBuy = () => {
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
      {historyBuy.map((category, index) => (
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
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
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
    paddingVertical: 15,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: Colors.DEFAULT_GREEN,
  },
  categoryBtn: {
    height: 45,
    width: 150,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
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

export default memo(HistoryBuy);
