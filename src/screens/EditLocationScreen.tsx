/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  Alert,
  Switch,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '@constants';
import styles from '@css/EditLocationScreenStyle';
import {TextInput} from 'react-native-gesture-handler';

const EditLocation = ({navigation, route}: any) => {
  const item = route.params;
  const [text, onChangeText] = useState(item.name);
  const [number, onChangeNumber] = useState(item.phone);
  const [address, setAddDress] = useState(item.title);
  const [addressNumber, setAddDressNumber] = useState(item.dress);

  const [collection, setCollection] = useState(false);

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
            placeholderTextColor={Colors.LIGHT_GREEN}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Số diện thoại"
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
            onChangeText={setAddDressNumber}
            value={addressNumber}
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
                  setCollection(!collection);
                }}>
                <Text
                  style={{
                    borderRadius: 5,
                    borderWidth: !collection ? 2 : 0,
                    borderColor: Colors.DEFAULT_YELLOW,
                    backgroundColor: !collection
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
                  setCollection(!collection);
                }}>
                <Text
                  style={{
                    borderRadius: 5,
                    borderWidth: collection ? 2 : 0,
                    borderColor: Colors.DEFAULT_YELLOW,
                    color: Colors.DEFAULT_GREEN,
                    fontSize: 16,
                    padding: 5,
                    backgroundColor: collection
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
                height: 65,
                marginBottom: 100,
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
export default EditLocation;
