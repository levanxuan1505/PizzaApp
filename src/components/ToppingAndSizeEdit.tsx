/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {memo, useState} from 'react';
import {Display} from '@utils';
import {Colors} from '@constants';
import {changeFoodInCart} from '../redux/cartSlice';
import styles from '@css/TopingAndSizeScreenStyle';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ToppingAndSizeEdit = ({navigation, food, setVisible}) => {
  // const size = useSelector((state: any) => state.size[0].size);
  // const moneyOption = useSelector((state: any) => state.moreOption[0].option);
  // const foodSize = food.size === 0 ? 0 : food.size === 5 ? 1 : 2;
  const dispatch = useDispatch();
  const [collectionSize, setCollectionSize] = useState(food.size);
  const moneyOfSize = collectionSize === 0 ? 0 : collectionSize === 5 ? 5 : 10;
  const [isEnabled1, setIsEnabled1] = useState(food.toping1Check);
  const [isEnabled2, setIsEnabled2] = useState(food.toping2Check);
  const [isEnabled3, setIsEnabled3] = useState(food.toping3Check);
  const option1 = isEnabled1 ? 1 : 0;
  const option2 = isEnabled2 ? 1 : 0;
  const option3 = isEnabled3 ? 1 : 0;
  const totalOption = option1 + option2 + option3;
  const moneyMoreOptions =
    (option1 ? food.value1 : 0) +
    (option2 ? food.value2 : 0) +
    (option3 ? food.value3 : 0);
  console.log(totalOption);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  const CartCard = ({item}: any) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => {
          navigation.navigate('DetailCard', food), setVisible(false);
        }}>
        <View style={styles.cartCard}>
          <View style={{position: 'absolute', top: -70, right: -25}}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => setVisible(false)}>
              <Icon
                name="cancel"
                size={45}
                style={{color: Colors.DEFAULT_GREEN}}
              />
            </TouchableHighlight>
          </View>
          <Image
            source={item.image}
            style={{
              height: Platform.OS === 'ios' ? Display.setHeight(8) : 70,
              width: Platform.OS === 'ios' ? Display.setHeight(8) : 70,
              borderRadius: 40,
            }}
          />
          <View
            style={{
              height: 100,
              marginLeft: Platform.OS === 'ios' ? 10 : 15,
              paddingVertical: 20,
              flex: 1,
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: Display.setHeight(2.2),
                color: Colors.DEFAULT_GREEN,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: Display.setHeight(1.8),
                color: Colors.DARK_FOUR,
              }}>
              {item.ingredients}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: Colors.GOOGLE_BLUE,
              }}>
              {item.price + moneyOfSize + moneyMoreOptions}k
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  //
  const CartCard1 = ({item}: any) => {
    return (
      <View style={{position: 'relative'}}>
        <View style={styles.cartCard1}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                marginLeft: Platform.OS === 'ios' ? 10 : 15,
                paddingVertical: 15,
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: Display.setWidth(5),
                  color: Colors.DEFAULT_RED,
                }}>
                Chọn kích cỡ
              </Text>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={{
                  width: Display.setWidth(22),
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:
                    collectionSize === 0
                      ? Colors.DEFAULT_RED
                      : Colors.DEFAULT_GREEN,
                  backgroundColor:
                    collectionSize === 0 ? Colors.DEFAULT_GREY : 'transparent',
                  borderWidth: collectionSize === 0 ? 0 : 2,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.53,
                  shadowRadius: 13.97,

                  elevation: 21,
                }}
                onPress={() => setCollectionSize(0)}>
                <Text style={styles.textOption}>S +0k</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: Display.setWidth(22),
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:
                    collectionSize === 5
                      ? Colors.DEFAULT_RED
                      : Colors.DEFAULT_GREEN,
                  backgroundColor:
                    collectionSize === 5 ? Colors.DEFAULT_GREY : 'transparent',
                  borderWidth: collectionSize === 5 ? 0 : 2,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.53,
                  shadowRadius: 13.97,

                  elevation: 21,
                }}
                onPress={() => setCollectionSize(5)}>
                <Text style={styles.textOption}>M +5k</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: Display.setWidth(22),

                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:
                    collectionSize === 10
                      ? Colors.DEFAULT_RED
                      : Colors.DEFAULT_GREEN,
                  backgroundColor:
                    collectionSize === 10 ? Colors.DEFAULT_GREY : 'transparent',
                  borderWidth: collectionSize === 10 ? 0 : 2,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.53,
                  shadowRadius: 13.97,

                  elevation: 21,
                }}
                onPress={() => setCollectionSize(10)}>
                <Text style={styles.textOption}>L +10k</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              position: 'relative',
              justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <View
              style={{
                marginLeft: Platform.OS === 'ios' ? 10 : 15,
                paddingVertical: Display.setHeight(2),
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: Display.setWidth(5),
                  color: Colors.DEFAULT_RED,
                }}>
                More Option
              </Text>
            </View>

            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              {item.toping1 ? (
                <TouchableOpacity
                  onPress={() => {
                    toggleSwitch1();
                  }}
                  style={{
                    width: '90%',
                    height: Display.setHeight(6),
                    marginVertical: 5,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: isEnabled1
                      ? Colors.DEFAULT_RED
                      : Colors.DEFAULT_GREEN,
                    backgroundColor: isEnabled1
                      ? Colors.DEFAULT_GREY
                      : 'transparent',
                    borderWidth: isEnabled1 ? 0 : 2,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 0.53,
                    shadowRadius: 13.97,

                    elevation: 21,
                  }}>
                  <Text style={styles.textOption}>
                    {item.toping1} +{item.value1}k
                  </Text>
                </TouchableOpacity>
              ) : (
                <View>{/* <Text style={styles.textOption}>5</Text> */}</View>
              )}
              {item.toping2 ? (
                <TouchableOpacity
                  onPress={() => {
                    toggleSwitch2();
                  }}
                  style={{
                    width: '90%',
                    height: Display.setHeight(6),
                    marginVertical: 5,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: isEnabled2
                      ? Colors.DEFAULT_RED
                      : Colors.DEFAULT_GREEN,
                    backgroundColor: isEnabled2
                      ? Colors.DEFAULT_GREY
                      : 'transparent',
                    borderWidth: isEnabled2 ? 0 : 2,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 0.53,
                    shadowRadius: 13.97,

                    elevation: 21,
                  }}>
                  <Text style={styles.textOption}>
                    {item.toping2} +{item.value2}k
                  </Text>
                </TouchableOpacity>
              ) : (
                <View>{/* <Text style={styles.textOption}>5</Text> */}</View>
              )}
              {item.toping3 ? (
                <TouchableOpacity
                  onPress={() => {
                    toggleSwitch3();
                  }}
                  style={{
                    width: '90%',
                    height: Display.setHeight(6),
                    marginVertical: 5,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: isEnabled3
                      ? Colors.DEFAULT_RED
                      : Colors.DEFAULT_GREEN,
                    backgroundColor: isEnabled3
                      ? Colors.DEFAULT_GREY
                      : 'transparent',
                    borderWidth: isEnabled3 ? 0 : 2,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 0.53,
                    shadowRadius: 13.97,

                    elevation: 21,
                  }}>
                  <Text style={styles.textOption}>
                    {item.toping3} +{item.value3}k
                  </Text>
                </TouchableOpacity>
              ) : (
                <View>{/* <Text style={styles.textOption}>5</Text> */}</View>
              )}
              <TouchableOpacity
                onPress={() => {
                  dispatch(
                    changeFoodInCart({
                      id: food.id,
                      name: food.name,
                      ingredients: food.ingredients,
                      image: food.image,
                      title: food.title,
                      price: food.price,
                      priceTotal:
                        food.price + collectionSize + moneyMoreOptions,
                      size: collectionSize,
                      toping1: item.toping1,
                      toping2: item.toping2,
                      toping3: item.toping3,
                      value1: item.value1,
                      value2: item.value2,
                      value3: item.value3,
                      toping1Check: isEnabled1,
                      toping2Check: isEnabled2,
                      toping3Check: isEnabled3,
                      // number Of Toping
                      numberOfToping: totalOption,
                      value1Check: isEnabled1 ? item.value1 : 0,
                      value2Check: isEnabled2 ? item.value2 : 0,
                      value3Check: isEnabled3 ? item.value3 : 0,
                    }),
                  ),
                    setVisible(false);
                }}
                style={{
                  position: 'absolute',
                  // bottom: 10,
                  bottom: -Display.setWidth(21),
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '98%',
                  height: 60,
                  borderRadius: 10,
                  backgroundColor: Colors.DEFAULT_GREEN,
                }}>
                <Text
                  style={{
                    fontSize: Display.setWidth(6),
                    fontWeight: '600',
                    color: Colors.DEFAULT_WHITE,
                  }}>
                  Xác nhận
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{alignItems: 'center'}}>
      <CartCard item={food} />
      <CartCard1 item={food} />
    </View>
  );
};

export default memo(ToppingAndSizeEdit);
