/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  Modal,
  Image,
  Animated,
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
import ToppingAndSize from './ToppingAndSize';
const ConditionToAdd = ({navigation, food}) => {
  // const [option, setOption] = useState(0);
  const [collection, setCollection] = useState(0);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const foods = food;
  const userName = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  // Poup nếu như chưa đăng nhâpj
  const [visible, setVisible] = useState(false);
  const ModalPopup = ({visible, children}: any) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        // setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          // duration: 3000,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 300);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  // Popup1 nếu đã đăng nhập có thể thêm toping
  // Poup nếu như chưa đăng nhâp
  const [visible1, setVisible1] = useState(false);
  const ModalPopup1 = ({visible, children}: any) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        // setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          // duration: 3000,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 300);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround1}>
          <View style={{position: 'absolute', top: 230, right: 10}}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => setVisible1(false)}>
              <Icon
                name="cancel"
                size={45}
                style={{color: Colors.DEFAULT_GREEN}}
              />
            </TouchableHighlight>
          </View>
          <Animated.View
            style={[
              styles.modalContainer2,
              {transform: [{scale: scaleValue}]},
            ]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  //  Card

  const CartCard = ({item}: any) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => {
          navigation.navigate('DetailCard', food), setVisible1(false);
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
              {foods.ingredients}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: Colors.GOOGLE_BLUE,
              }}>
              {item.price}k
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
        <View style={{position: 'absolute', top: -190, right: -10}}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() => setVisible1(false)}>
            <Icon
              name="cancel"
              size={45}
              style={{color: Colors.DEFAULT_GREEN}}
            />
          </TouchableHighlight>
        </View>
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
                  setCollection(0);
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
                  setCollection(1);
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
                  setCollection(2);
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
                  <Text style={styles.textOption}>{item.toping1}</Text>
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
                  <Text style={styles.textOption}>{item.toping2}</Text>
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
                  <Text style={styles.textOption}>{item.toping3}</Text>
                </TouchableOpacity>
              ) : (
                <View>{/* <Text style={styles.textOption}>5</Text> */}</View>
              )}
            </View>
            <View
              style={{
                position: 'absolute',
                // bottom: 10,
                top: 265,
                justifyContent: 'center',
                alignItems: 'center',
                width: '98%',
                height: 60,
                borderColor: 'red',
                borderWidth: 2,
                borderRadius: 10,
                // marginTop: 30,
              }}>
              <Text style={{fontSize: 24, fontWeight: '600', color: 'green'}}>
                Thêm vào giỏ
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  //
  return userName[0].userName ? (
    // <TouchableHighlight
    //   underlayColor="transparent"
    //   onPress={() => {
    //     // dispatch(
    //     //   addToCart({
    //     //     id: food.id,
    //     //     name: food.name,
    //     //     ingredients: food.ingredients,
    //     //     price: food.price,
    //     //     image: food.image,
    //     //     title: food.title,
    //     //   }),
    //     // );
    //   }}>
    //   <Icon name="add" size={32} color={Colors.DEFAULT_WHITE} />
    // </TouchableHighlight>
    <View>
      <ModalPopup1 visible={visible1}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {/* <CartCard item={food} />
          <CartCard1 item={food} /> */}
          <ToppingAndSize
            navigation={navigation}
            food={food}
            setVisible={setVisible1}
          />
        </View>
      </ModalPopup1>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => setVisible1(true)}>
        {/* onPress={() => {
          dispatch(
            changePopUp({
              isPopUp: true,
            }),
          );
        }}> */}
        <Icon name="add" size={32} color={Colors.DEFAULT_WHITE} />
      </TouchableHighlight>
      {/* <ToppingAndSize food={food} /> */}
    </View>
  ) : (
    <View>
      <ModalPopup visible={visible}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={[styles.Header2, {borderBottomColor: Colors.DEFAULT_WHITE}]}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: Colors.DEFAULT_RED,
                paddingTop: 5,
              }}>
              Cảnh báo
            </Text>
          </View>
          <View style={[styles.Header2, {top: -10, paddingBottom: 10}]}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: Colors.DEFAULT_GREEN,
              }}>
              Bạn cần đăng nhập để thêm món ăn
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: -10,
            }}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                setVisible(false), navigation.navigate('SignIn');
              }}>
              <Text
                style={{
                  color: Colors.DEFAULT_GREEN,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Đăng nhập
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => setVisible(false)}>
              <Text
                style={{
                  color: Colors.DEFAULT_RED,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Huỷ bỏ
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ModalPopup>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => setVisible(true)}>
        <Icon name="add" size={32} color={Colors.DEFAULT_WHITE} />
      </TouchableHighlight>
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
    position: 'relative',
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
export default memo(ConditionToAdd);
