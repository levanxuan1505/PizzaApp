/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Alert,
  Switch,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@constants';
import {SecondaryButton} from '@components';
import {TextInput} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';

const EditLocation = ({navigation, route}: any) => {
  const item = route.params;
  const [text, onChangeText] = useState(item.name);
  const [number, onChangeNumber] = useState(item.phone);
  const [address, setAddDress] = useState(item.title);
  const [addressNumber, setAddDressNumber] = useState(item.dress);

  const [colection, setColection] = useState(false);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE}}>
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
          Sửa Địa chỉ
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
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Số diện thoại"
            keyboardType="numeric"
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
          />
          <TextInput
            style={styles.input}
            onChangeText={setAddDressNumber}
            value={addressNumber}
            placeholder="Số địa chỉ nhà"
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
                    borderWidth: !colection ? 2 : 0,
                    borderColor: Colors.DEFAULT_RED,
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
                    borderWidth: colection ? 2 : 0,
                    borderColor: Colors.DEFAULT_RED,
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
                  trackColor={{false: '#767577', true: '#0A8791'}}
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
                  trackColor={{false: '#767577', true: '#0A8791'}}
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
                  trackColor={{false: '#767577', true: '#0A8791'}}
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
          onPress={() =>
            Alert.alert('Xác nhận', 'Hành động này sẽ xoá địa chỉ của bạn', [
              {text: 'Xác nhận', onPress: () => {}},
              {text: 'Huỷ bỏ', onPress: () => {}},
            ])
          }>
          <View
            style={[
              styles.input,
              {marginHorizontal: 10, justifyContent: 'center'},
            ]}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: Colors.DEFAULT_RED,
              }}>
              Xoá địa chỉ
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Alert.alert('Hoàn tất', 'Xác nhận thay đổi của bạn', [
              {text: 'Xác nhận', onPress: () => {}},
              {text: 'Huỷ bỏ', onPress: () => {}},
            ])
          }>
          <View
            style={[
              styles.input,
              {
                marginHorizontal: 10,
                justifyContent: 'center',
                paddingVertical: 8,
                marginBottom: 100,
                backgroundColor: Colors.DEFAULT_YELLOW,
              },
            ]}>
            <Text
              style={{
                color: Colors.DEFAULT_WHITE,
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

const styles = StyleSheet.create({
  header: {
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 0 : 30,
  },
  input: {
    height: 52,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 12,
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
  //   input: {
  //     height: 40,
  //     marginVertical: 8,
  //     borderBottomWidth: 0.2,
  //     // padding: 10,
  // },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 100,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  //   iconContainer: {
  //     backgroundColor: Colors.DEFAULT_WHITE,
  //     height: 50,
  //     width: 50,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 30,
  //   },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: Colors.DEFAULT_WHITE,
  },
  addRess: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginHorizontal: -10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
    paddingVertical: 4,
  },
  addressText: {
    fontSize: 18,
    color: Colors.DEFAULT_GREEN,
  },
});

export default EditLocation;
