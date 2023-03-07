/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  Modal,
  ScrollView,
  Animated,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '@constants';
import styles from '@css/CreateAddressScreenStyle';
import {TextInput} from 'react-native-gesture-handler';

const CreateAddressScreen = ({navigation}: any) => {
  const [colection, setColection] = useState(false);
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [address, setAddDress] = useState('');
  const [addressNumber, setAddDressNumber] = useState('');
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  // modal
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
          // duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 300);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 1000,
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
  // modal
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE}}>
      {/* modal */}

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
              Xác nhận đăng ký địa chỉ mới
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
                setVisible(false), navigation.navigate('Local');
              }}>
              <Text
                style={{
                  color: Colors.DEFAULT_GREEN,
                  fontSize: 21,
                  fontWeight: '700',
                }}>
                Xác nhận
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text
                style={{
                  color: Colors.DEFAULT_RED,
                  fontSize: 21,
                  fontWeight: '700',
                }}>
                Huỷ bỏ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPoup>
      {/* modal */}
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
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Địa chỉ mới
        </Text>
      </View>
      {/*  */}
      <ScrollView>
        <View style={{marginHorizontal: 20, paddingBottom: 20}}>
          <Text style={{fontSize: 18, color: Colors.DEFAULT_GREEN}}>
            Liên hệ
          </Text>
          <TextInput
            value={text}
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Họ và tên"
            placeholderTextColor={Colors.LIGHT_GREEN}
          />
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={onChangeNumber}
            placeholder="Số điện thoại"
            keyboardType="numeric"
            placeholderTextColor={Colors.LIGHT_GREEN}
          />
          <Text
            style={{fontSize: 18, color: Colors.DEFAULT_GREEN, marginTop: 10}}>
            Địa chỉ
          </Text>
          <TextInput
            value={address}
            style={styles.input}
            onChangeText={setAddDress}
            placeholder="thôn, xã, huyện, thành phố"
            placeholderTextColor={Colors.LIGHT_GREEN}
          />
          <TextInput
            style={styles.input}
            value={addressNumber}
            onChangeText={setAddDressNumber}
            placeholder="Số địa chỉ nhà"
            placeholderTextColor={Colors.LIGHT_GREEN}
          />
          {/* box */}
          <View style={styles.addRess}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Text style={{fontSize: 18, color: Colors.DEFAULT_GREEN}}>
                Loại địa chỉ
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setColection(!colection);
                }}>
                <Text
                  style={{
                    borderRadius: 5,
                    borderWidth: !colection ? 2 : 0,
                    borderColor: Colors.DEFAULT_YELLOW,
                    backgroundColor: !colection
                      ? Colors.DEFAULT_WHITE
                      : Colors.DEFAULT_GREY,
                    left: 30,
                    padding: 5,
                    color: Colors.DEFAULT_GREEN,
                    fontSize: 16,
                  }}>
                  Nhà riêng
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setColection(!colection);
                }}>
                <Text
                  style={{
                    borderRadius: 5,
                    borderWidth: colection ? 2 : 0,
                    borderColor: Colors.DEFAULT_YELLOW,
                    color: Colors.DEFAULT_GREEN,
                    fontSize: 16,
                    padding: 5,
                    backgroundColor: colection
                      ? Colors.DEFAULT_WHITE
                      : Colors.DEFAULT_GREY,
                  }}>
                  Văn phòng
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.address}>
              <Text style={styles.addressText}>Đặt làm địa chỉ mặc định</Text>
              <View style={{}}>
                <Switch
                  trackColor={{false: '#767577', true: Colors.DEFAULT_GREEN}}
                  thumbColor={isEnabled1 ? '#FFFFFF' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                />
              </View>
            </View>
            <View style={styles.address}>
              <Text style={styles.addressText}>Đặt làm địa chỉ lấy hàng</Text>
              <View style={{}}>
                <Switch
                  trackColor={{false: '#767577', true: Colors.DEFAULT_GREEN}}
                  thumbColor={isEnabled2 ? '#FFFFFF' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch2}
                  value={isEnabled2}
                />
              </View>
            </View>
            <View style={styles.address}>
              <Text style={styles.addressText}>Đặt làm địa chỉ trả hàng</Text>
              <View style={{}}>
                <Switch
                  trackColor={{false: '#767577', true: Colors.DEFAULT_GREEN}}
                  thumbColor={isEnabled3 ? '#FFFFFF' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch3}
                  value={isEnabled3}
                />
              </View>
            </View>
            {/*  */}
          </View>

          {/*  */}
        </View>

        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}>
          <View
            style={[
              styles.input,
              {
                marginHorizontal: 10,
                justifyContent: 'center',
                paddingVertical: 8,
                height: 65,
                marginBottom: 150,
                backgroundColor: Colors.DEFAULT_WHITE,
              },
            ]}>
            <Text
              style={{
                color: Colors.DEFAULT_GREEN,
                fontSize: 22,
                fontWeight: '600',
              }}>
              HOÀN THÀNH
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateAddressScreen;
