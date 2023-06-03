/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState, memo} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  Platform,
  Animated,
  TouchableHighlight,
} from 'react-native';

import {Swipeable} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import styles from '@css/CartScreenStyle';
import {Colors} from '@constants';
import {ToppingAndSizeEdit} from '@components';
// redux import
import {useDispatch} from 'react-redux';
import {removeCart} from '../redux/cartSlice';
import {Display} from '@utils';

const CardTag = ({navigation, item}: any) => {
  const [visible1, setVisible1] = useState(false);
  const dispatch = useDispatch();
  //   Modal
  // Poup nếu như chưa đăng nhâpj
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
  const leftSwiper = () => {
    return (
      <View style={{backgroundColor: Colors.DEFAULT_YELLOW}}>
        <ModalPopup1 visible={visible1}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <ToppingAndSizeEdit
              navigation={navigation}
              food={item}
              setVisible={setVisible1}
            />
          </View>
        </ModalPopup1>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => setVisible1(true)}
          style={{
            width: Display.setWidth(25),
            height: Display.setWidth(25),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="edit" size={32} color={Colors.DEFAULT_GREEN} />
        </TouchableHighlight>
      </View>
    );
  };
  const rightSwiper = () => {
    return (
      <View style={{backgroundColor: Colors.DEFAULT_RED}}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={
            () => dispatch(removeCart({id: item.id}))
            // console.log(item)
          }
          style={{
            width: Display.setWidth(25),
            height: Display.setWidth(25),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Iconss name="trash" size={32} color={Colors.DEFAULT_GREEN} />
        </TouchableHighlight>
      </View>
    );
  };
  return (
    <Swipeable
      containerStyle={{
        // overflow: 'hidden',
        height: Display.setWidth(25),
        width: Display.setWidth(92),
        borderRadius: 10,
        backgroundColor: Colors.DEFAULT_GREEN,
        // backgroundColor: Colors.DEFAULT_WHITE,

        marginVertical: Display.setWidth(1),
        marginHorizontal: Display.setWidth(2),
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 11,
      }}
      renderLeftActions={leftSwiper}
      renderRightActions={rightSwiper}>
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={Platform.OS === 'ios' ? 0.2 : 0.8}
        onPress={() => navigation.navigate('DetailOption', item)}>
        <View style={styles.cartCard}>
          <Image
            source={item.image}
            style={{
              height: Display.setWidth(18),
              width: Display.setWidth(18),
              borderRadius: 40,
            }}
          />
          <View
            style={{
              height: 100,
              marginLeft: 10,
              paddingVertical: 20,
              flex: 1,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: Display.setWidth(3.7)}}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: Display.setWidth(3),
                color: Colors.DEFAULT_GREY,
              }}>
              {item.ingredients}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontSize: Display.setWidth(3.5), fontWeight: 'bold'}}>
                {item.priceTotal}k
              </Text>
              <Text
                style={{
                  fontSize: Display.setWidth(3.5),
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                Size: {item.size === 0 ? 'S' : item.size === 5 ? 'M' : 'L'}
              </Text>
              <Text
                style={{
                  fontSize: Display.setWidth(3.5),
                  fontWeight: 'bold',
                  paddingLeft: 5,
                }}>
                Topping: {item.numberOfToping}
              </Text>
            </View>
          </View>
          {/* <TouchableHighlight
              underlayColor="transparent"
              onPress={() => dispatch(removeCart({id: item.id}))}
              style={{
                marginRight: Display.setWidth(3) - 2,
                alignItems: 'center',
              }}>
              <Iconss name="trash" size={32} color={Colors.DEFAULT_GREEN} />
            </TouchableHighlight> */}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};
export default memo(CardTag);
