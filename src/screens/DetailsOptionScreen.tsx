/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  Platform,
  Animated,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@constants';
import styles from '@css/DetailsOptionScreenStyle';
import {SecondaryButton} from '@components';
// redux import
import {useDispatch, useSelector} from 'react-redux';
import {removeCart} from '../redux/cartSlice';
import {deleteBookmark} from '../redux/bookmarkSlice';

//

import {ScrollView} from 'react-native-gesture-handler';
import {addToBookmark} from '../redux/bookmarkSlice';
import {Display} from '@utils';

const DetailsOptionScreen = ({navigation, route}: any) => {
  const item = route.params;
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [isHeart, setIsHeart] = useState(true);
  const user = useSelector((state: any) => state.user);
  // redux
  const dispatch = useDispatch();
  //

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
  // modal 2
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
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  const HandleAction = () => {
    return user[0].userName ? (
      <TouchableOpacity
        onPress={() => {
          isHeart
            ? dispatch(
                addToBookmark({
                  id: item.id,
                  name: item.name,
                  ingredients: item.ingredients,
                  price: item.price,
                  image: item.image,
                  title: item.title,
                  toping1: item.toping1,
                  toping2: item.toping2,
                  toping3: item.toping3,
                  value1: item.value1,
                  value2: item.value2,
                  value3: item.value3,
                }),
              )
            : dispatch(deleteBookmark({id: item.id})),
            setIsHeart(!isHeart);
        }}>
        <View style={styles.iconContainer}>
          <Icons
            name={isHeart ? 'heart' : 'heart-dislike'}
            color={Colors.DEFAULT_GREEN}
            size={25}
          />
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}>
        <View style={styles.iconContainer}>
          <Icons name="heart" color={Colors.DEFAULT_GREEN} size={25} />
        </View>
      </TouchableOpacity>
    );
  };
  const HandleAction1 = () => {
    return user[0].userName ? (
      <View style={{position: 'relative'}}>
        <SecondaryButton
          title="Xoá bỏ món ăn"
          onPress={() => setVisible1(true)}
        />
      </View>
    ) : (
      <SecondaryButton title="Thêm vào giỏ hàng" />
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
      {/* Modal */}
      <ModalPopup visible={visible}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={[styles.Header, {borderBottomColor: Colors.DEFAULT_WHITE}]}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: Colors.DEFAULT_RED,
                paddingTop: 10,
              }}>
              Cảnh báo
            </Text>
          </View>
          <View style={[styles.Header, {top: -10, paddingBottom: 10}]}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: Colors.DEFAULT_GREEN,
              }}>
              Bạn cần đăng nhập để bookmark
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
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
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text
                style={{
                  color: Colors.DEFAULT_RED,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Huỷ bỏ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPopup>
      {/*  Modal end */}
      {/* Modal */}
      <ModalPopup1 visible={visible1}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={[styles.Header, {borderBottomColor: Colors.DEFAULT_WHITE}]}>
            <Text
              style={{
                fontSize: Display.setWidth(6),
                fontWeight: '600',
                color: Colors.DEFAULT_GREEN,
                paddingTop: 10,
              }}>
              Cảnh báo
            </Text>
          </View>
          <View style={[styles.Header, {top: -2, paddingBottom: 10}]}>
            <Text
              style={{
                fontSize: Display.setWidth(5),
                fontWeight: '500',
                textAlign: 'center',
                color: Colors.DEFAULT_RED,
              }}>
              Bạn có chắc chắn muốn xoá món ăn
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: -10,
            }}>
            <TouchableOpacity
              onPress={() => {
                setVisible1(false),
                  navigation.goBack(),
                  dispatch(removeCart({id: item.id}));
              }}>
              <Text
                style={{
                  color: Colors.DEFAULT_RED,
                  fontSize: Display.setWidth(6),
                  fontWeight: '600',
                }}>
                Xoá
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible1(false)}>
              <Text
                style={{
                  color: Colors.DEFAULT_GREEN,
                  fontSize: Display.setWidth(6),
                  fontWeight: '600',
                }}>
                Huỷ bỏ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPopup1>
      {/*  Modal end */}
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
            fontSize: Display.setWidth(5),
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Chi tiết Toppings
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: -400}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: Display.setWidth(65),
          }}>
          <Image
            source={item.image}
            style={{
              height: Display.setWidth(60),
              width: Display.setWidth(90),
              borderRadius: 20,
            }}
          />
        </View>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
            }}>
            <Text
              style={{
                fontSize: Platform.OS === 'ios' ? Display.setWidth(6) : 18,
                fontWeight: 'bold',
                color: Colors.DEFAULT_WHITE,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: Platform.OS === 'ios' ? Display.setWidth(6) : 18,
                color: Colors.DEFAULT_WHITE,
                fontWeight: '600',
                right: 65,
              }}>
              {item.price}k
            </Text>
            <HandleAction />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: Display.setWidth(6),
                color: Colors.DEFAULT_WHITE,
                fontWeight: 'bold',
              }}>
              Size:
            </Text>
            <Text
              style={{
                fontSize: Display.setWidth(6),
                color: Colors.DEFAULT_WHITE,
              }}>
              {item.size === 0 ? ' S' : item.size === 5 ? ' M' : ' L'}
            </Text>
          </View>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View>
              <Text
                style={{
                  fontSize: Display.setWidth(6),
                  color: Colors.DEFAULT_WHITE,
                  paddingRight: 10,
                  fontWeight: 'bold',
                }}>
                Toppings: {item.numberOfToping}
              </Text>
            </View>
            <View style={{paddingLeft: 10}}>
              <Text style={{fontSize: 20, color: Colors.DEFAULT_WHITE}}>
                {item.toping1Check ? `+ ${item.toping1}: ${item.value1}k` : ''}
              </Text>
              <Text style={{fontSize: 20, color: Colors.DEFAULT_WHITE}}>
                {item.toping2Check ? `+ ${item.toping2}: ${item.value2}k` : ''}
              </Text>
              <Text style={{fontSize: 20, color: Colors.DEFAULT_WHITE}}>
                {item.toping3Check ? `+ ${item.toping3}: ${item.value3}k` : ''}
              </Text>
            </View>
          </View>
          <Text style={styles.detailsText}>{item.title}</Text>
        </View>
      </ScrollView>
      <View style={styles.total}>
        <HandleAction1 />
      </View>
    </SafeAreaView>
  );
};
export default DetailsOptionScreen;
