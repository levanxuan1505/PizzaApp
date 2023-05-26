/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  Text,
  View,
  Image,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {memo, useState} from 'react';
import {Colors} from '@constants';
import {useSelector, useDispatch} from 'react-redux';
import {changePopUp} from '../redux/popUpOptionSlice';
import {chooseSize} from '../redux/optionSizeSlice';
import {addToCart} from '../redux/cartSlice';
import {chooseMoreOption} from '../redux/moreOptionSlice';
const ToppingAndSize = ({navigation, food, setVisible}) => {
  //   const [visible, setVisible] = useState(false);
  const isPopUp = useSelector((state: any) => state.popUp);
  const size = useSelector((state: any) => state.size[0].size);
  const moneyOption = useSelector((state: any) => state.moreOption[0].option);
  const [option, setOption] = useState(0);
  const [collection, setCollection] = useState(0);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const dispatch = useDispatch();
  const option1 = isEnabled1 ? food.value1 : 0;
  const option2 = isEnabled2 ? food.value2 : 0;
  const option3 = isEnabled3 ? food.value3 : 0;
  const totalOption = option1 + option2 + option3;
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  dispatch(
    chooseMoreOption({
      option: totalOption,
    }),
  );
  const CartCard = ({item}: any) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => {
          navigation.navigate('DetailCard', food), setVisible(false);
        }}>
        <View style={styles.cartCard}>
          <Image
            source={item.image}
            style={{
              height: Platform.OS === 'ios' ? 80 : 70,
              width: Platform.OS === 'ios' ? 80 : 70,
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
                fontSize: 17,
                color: Colors.DEFAULT_GREEN,
              }}>
              {item.name}
            </Text>
            <Text style={{fontSize: 14, color: Colors.DARK_FOUR}}>
              {item.ingredients}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: Colors.GOOGLE_BLUE,
              }}>
              {item.price + size + moneyOption}k
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
                height: 70,
                marginLeft: Platform.OS === 'ios' ? 10 : 15,
                paddingVertical: 20,
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 20,
                  color: Colors.DEFAULT_RED,
                }}>
                Chọn kích cỡ
              </Text>
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:
                    collection === 0
                      ? Colors.DEFAULT_RED
                      : Colors.DEFAULT_GREEN,
                  backgroundColor:
                    collection === 0 ? Colors.DEFAULT_GREY : 'transparent',
                  borderWidth: collection === 0 ? 0 : 2,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.53,
                  shadowRadius: 13.97,

                  elevation: 21,
                }}
                onPress={() => {
                  setCollection(0),
                    dispatch(
                      chooseSize({
                        size: 0,
                      }),
                    );
                }}>
                <Text style={styles.textOption}>S +0k</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 100,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:
                    collection === 1
                      ? Colors.DEFAULT_RED
                      : Colors.DEFAULT_GREEN,
                  backgroundColor:
                    collection === 1 ? Colors.DEFAULT_GREY : 'transparent',
                  borderWidth: collection === 1 ? 0 : 2,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.53,
                  shadowRadius: 13.97,

                  elevation: 21,
                }}
                onPress={() => {
                  setCollection(1),
                    dispatch(
                      chooseSize({
                        size: 5,
                      }),
                    );
                }}>
                <Text style={styles.textOption}>M +5k</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:
                    collection === 2
                      ? Colors.DEFAULT_RED
                      : Colors.DEFAULT_GREEN,
                  backgroundColor:
                    collection === 2 ? Colors.DEFAULT_GREY : 'transparent',
                  borderWidth: collection === 2 ? 0 : 2,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.53,
                  shadowRadius: 13.97,

                  elevation: 21,
                }}
                onPress={() => {
                  setCollection(2),
                    dispatch(
                      chooseSize({
                        size: 10,
                      }),
                    );
                }}>
                <Text style={styles.textOption}>L +10k</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{position: 'relative'}}>
            <View
              style={{
                height: 55,
                marginLeft: Platform.OS === 'ios' ? 10 : 15,
                paddingTop: 20,
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 20,
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
                    height: 50,
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
                    height: 50,
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
                    {' '}
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
                    height: 50,
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
            </View>
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  addToCart({
                    id: food.id,
                    name: food.name,
                    ingredients: food.ingredients,
                    price: food.price + size + moneyOption,
                    image: food.image,
                    title: food.title,
                    size: size,
                    value1: isEnabled1 ? item.toping1 : '',
                    value2: isEnabled2 ? item.toping2 : '',
                    value3: isEnabled3 ? item.toping3 : '',
                  }),
                ),
                  setVisible(false);
              }}
              style={{
                position: 'absolute',
                // bottom: 10,
                top: 265,
                justifyContent: 'center',
                alignItems: 'center',
                width: '98%',
                height: 60,
                borderRadius: 10,
                backgroundColor: Colors.DEFAULT_GREEN,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '600',
                  color: Colors.DEFAULT_WHITE,
                }}>
                Thêm vào giỏ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <CartCard item={food} />
      <CartCard1 item={food} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackGround1: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingBottom: 25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    width: Platform.OS === 'ios' ? '80%' : '90%',
    height: 140,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 20,
  },
  modalContainer2: {
    width: Platform.OS === 'ios' ? '90%' : '90%',
    height: '68%',
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 20,
  },
  size: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  sizeS: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: collocation == 0 ? Colors.DEFAULT_R : Colors.DEFAULT_GREEN,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  size1: {
    width: '90%',
    height: 50,
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  textOption: {
    fontSize: 24,
    fontWeight: '600',
    paddingHorizontal: 10,
    color: Colors.DEFAULT_GREEN,
  },
  textOption1: {
    fontSize: 24,
    fontWeight: '600',
    paddingHorizontal: 10,
    color: Colors.DEFAULT_GREEN,
  },
  Header2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
    width: '100%',
  },
  cartCard: {
    height: 100,
    width: '90%',
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 20,
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
  cartCard1: {
    height: 455,
    width: 345,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    // marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'column',
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  Option: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
    width: '100%',
  },
});
export default ToppingAndSize;
