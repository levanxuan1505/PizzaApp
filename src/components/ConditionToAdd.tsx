/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  Modal,
  Animated,
  Platform,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {memo, useState} from 'react';
import {Colors} from '@constants';
import {Display} from '@utils';
import {useSelector} from 'react-redux';
import ToppingAndSize from './ToppingAndSize';
const ConditionToAdd = ({navigation, food}) => {
  const userName = useSelector((state: any) => state.user);

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
          {/* <View style={{position: 'absolute', top: 85, right: 10}}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => setVisible1(false)}>
              <Icon
                name="cancel"
                size={45}
                style={{color: Colors.DEFAULT_GREEN}}
              />
            </TouchableHighlight>
          </View> */}
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
  //
  return userName[0].userName ? (
    <View>
      <ModalPopup1 visible={visible1}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
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
        <Icon name="add" size={32} color={Colors.DEFAULT_WHITE} />
      </TouchableHighlight>
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
                fontSize: Display.setWidth(5),
                paddingTop: Display.setWidth(1),
                fontWeight: '500',
                color: Colors.DEFAULT_GREEN,
                textAlign: 'center',
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
    // paddingBottom: 25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    width: Platform.OS === 'ios' ? '90%' : '90%',
    height: 140,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 20,
  },
  modalContainer2: {
    width: Platform.OS === 'ios' ? '90%' : '90%',
    height: Display.setWidth(149),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
