/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Animated,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, history} from '@constants';
import styles from '@css/SearchScreenStyle';

export default function Search() {
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
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      {/*  */}
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
              Xác nhận xoá lịch sử này
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
                  color: Colors.DEFAULT_RED,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Xoá
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
      </ModalPopup>
      {/*  */}
      <View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            // paddingHorizontal: 20,
          }}>
          <View style={styles.inputContainer}>
            <Icon name="search" size={28} color={Colors.DEFAULT_GREEN} />
            <TextInput
              style={{flex: 1, fontSize: 18, marginLeft: 5}}
              placeholder="Tìm kiếm"
              onSubmitEditing={Keyboard.dismiss}
            />
            <TouchableOpacity>
              <Icons
                name="camera-outline"
                size={30}
                color={Colors.DEFAULT_GREEN}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.sortBtn}>
            <Icon name="tune" size={30} color={Colors.DEFAULT_WHITE} />
          </View>
        </View>
        <View style={styles.History}>
          <View>
            {history.map((history, index) => (
              <TouchableOpacity style={styles.history} key={index}>
                <Icon name="history" color={Colors.DEFAULT_GREEN} size={32} />
                <Text style={styles.text}>{history.title}</Text>
                <Icons
                  name="trash"
                  size={27}
                  onPress={() => setVisible(true)}
                  color={Colors.DEFAULT_GREEN}
                  style={{position: 'absolute', right: -4}}
                />
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  marginTop: 25,
                  color: Colors.DEFAULT_GREEN,
                }}>
                Hiển thị nhiều hơn
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
