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
  Animated,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@constants';
import styles from '@css/DetailsCardScreenStyle';
import {SecondaryButton} from '@components';
// redux import
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/cartSlice';
//

import {ScrollView} from 'react-native-gesture-handler';
import {addToBookmark} from '../redux/bookmarkSlice';

const DetailsCardScreen = ({navigation, route}: any) => {
  const item = route.params;
  const [visible, setVisible] = useState(false);
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
                color: Colors.DEFAULT_GREEN,
                paddingTop: 10,
              }}>
              Xác nhận
            </Text>
          </View>
          <View style={[styles.Header, {top: -10, paddingBottom: 10}]}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: Colors.DEFAULT_GREEN,
              }}>
              Thêm món ăn vào giỏ hàng
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: -10,
            }}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text
                style={{
                  color: Colors.DEFAULT_GREEN,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Thêm vào
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
            fontSize: 22,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Chi tiết món ăn
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: -400}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{height: 220, width: 220}} />
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
                fontSize: 25,
                fontWeight: 'bold',
                color: Colors.DEFAULT_WHITE,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                position: 'absolute',
                fontSize: 25,
                color: Colors.DEFAULT_WHITE,
                fontWeight: '600',
                right: 65,
              }}>
              {item.price}k
            </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  addToBookmark({
                    name: item.name,
                    ingredients: item.ingredients,
                    price: item.price,
                    image: item.image,
                    title: item.title,
                  }),
                );
              }}>
              <View style={styles.iconContainer}>
                <Icons name="heart" color={Colors.DEFAULT_GREEN} size={25} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.detailsText}>{item.title}</Text>
        </View>
      </ScrollView>
      <View style={styles.total}>
        <SecondaryButton
          title="Thêm vào giỏ hàng"
          onPress={() => {
            dispatch(
              addToCart({
                id: item.id,
                name: item.name,
                ingredients: item.ingredients,
                price: item.price,
                image: item.image,
                title: item.title,
              }),
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default DetailsCardScreen;
