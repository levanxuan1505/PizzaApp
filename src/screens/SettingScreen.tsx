/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  Platform,
  Animated,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '@constants';
import {SecondaryButton} from '@components';
import {setting1, setting2, setting3} from '@constants';

export default function SettingScreen({navigation}: any) {
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
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 200,
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
  const CartCard = ({item}: any) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            paddingVertical: 9.5,
            borderBottomWidth: 0.2,
            borderBottomColor: Colors.DEFAULT_GREEN,
          }}>
          <Text style={{fontSize: 17}}>{item.title}</Text>
          <Icon
            name="arrow-forward-ios"
            size={17}
            color={Colors.SECONDARY_RED}
            style={{position: 'absolute', right: 0}}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
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
                color: Colors.DEFAULT_RED,
                paddingTop: 10,
              }}>
              Cảnh Báo
            </Text>
          </View>
          <View style={[styles.Header, {top: -10, paddingBottom: 10}]}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: Colors.DEFAULT_GREEN,
              }}>
              Hành động này sẽ đăng xuất
            </Text>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: Colors.DEFAULT_GREEN,
              }}>
              bạn khỏi hệ thống
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
                setVisible(false);
                navigation.navigate('Options');
              }}>
              <Text
                style={{
                  color: Colors.DEFAULT_RED,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Đăng xuất
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text
                style={{
                  color: Colors.DEFAULT_GREEN,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Huỷ bỏ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPoup>
      <View>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            onPress={navigation.goBack}
            style={{position: 'absolute', left: 2, color: Colors.DEFAULT_GREEN}}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            Thiết lập tài khoản
          </Text>

          <View style={{right: 20, position: 'absolute'}}>
            <Icon name="settings" size={30} style={styles.icon} />
          </View>
        </View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: '500',
            color: Colors.DEFAULT_GREEN,
          }}>
          Tài khoản của tôi
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          data={setting1}
          renderItem={({item}) => <CartCard item={item} />}
        />
        <Text
          style={{
            paddingTop: 18,
            fontSize: 19,
            fontWeight: '500',
            color: Colors.DEFAULT_GREEN,
          }}>
          Cài đặt
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          data={setting2}
          renderItem={({item}) => <CartCard item={item} />}
        />
        <Text
          style={{
            paddingTop: 18,
            fontSize: 19,
            fontWeight: '500',
            color: Colors.DEFAULT_GREEN,
          }}>
          Hỗ trợ
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          data={setting3}
          renderItem={({item}) => <CartCard item={item} />}
        />
        {/* Đăng xuất */}
        <View style={{bottom: -20, marginHorizontal: 20}}>
          <SecondaryButton title="ĐĂNG XUẤT" onPress={() => setVisible(true)} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 20,
    paddingVertical: 20,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Colors.DEFAULT_GREEN,
  },

  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '72%',
    height: 150,
    backgroundColor: 'white',
    paddingHorizontal: 5,
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
