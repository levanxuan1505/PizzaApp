/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  // Button,
  Modal,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@constants';
import {SecondaryButton} from '@components';

import {ScrollView} from 'react-native-gesture-handler';

const DetailsCardScreen = ({navigation, route, heartValue}: any) => {
  const item = route.params;
  const [heart, setHeart] = useState(!heartValue);
  const [visible, setVisible] = useState(false);

  const ModalPoup = ({visible, children}) => {
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
          duration: 300,
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
      {/* <ModalConfirm visible={visible} /> */}
      <ModalPoup visible={visible}>
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
      </ModalPoup>
      {/*  */}
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
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
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
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: Colors.DEFAULT_WHITE,
              }}>
              {item.name}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setHeart(!heart);
              }}>
              <View style={styles.iconContainer}>
                <Icons
                  name={heartValue ? 'heart' : 'heart-dislike-sharp'}
                  color={Colors.DEFAULT_GREEN}
                  size={25}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.detailsText}>{item.title}</Text>
        </View>
      </ScrollView>
      <View style={styles.total}>
        <SecondaryButton
          title="Thêm vào giỏ hàng"
          onPress={() => setVisible(true)}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 0 : 30,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: Platform.OS === 'ios' ? 100 : 80,
    backgroundColor: Colors.DEFAULT_GREEN,
    // borderRadius: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  iconContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    paddingBottom: 400,
    color: Colors.DEFAULT_WHITE,
  },
  total: {
    backgroundColor: Colors.DEFAULT_GREEN,
    marginBottom: Platform.OS === 'ios' ? -38 : 0,
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 40 : 15,
  },
  // button: {
  //   paddingVertical: 10,
  //   marginHorizontal: 20,
  // },
  //
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '70%',
    height: 140,
    backgroundColor: 'white',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    borderRadius: 15,
    elevation: 20,
  },
  Header: {
    // paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 20,
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
    width: '100%',
  },
});

export default DetailsCardScreen;
