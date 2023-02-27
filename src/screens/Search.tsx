/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Alert,
  Keyboard,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, history} from '@constants';

export default function Search() {
  const showAlertDelete = () =>
    Alert.alert('Cảnh báo', 'Xác nhận xoá lịch sử này', [
      {text: 'Xoá', onPress: () => {}},
      {text: 'Huỷ', onPress: () => {}},
    ]);
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
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
                  onPress={showAlertDelete}
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

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Colors.DARK_FIVE,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  History: {
    // marginHorizontal: 20,
    marginVertical: 10,
  },

  history: {
    position: 'relative',
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 15,
    borderBottomColor: Colors.DEFAULT_GREEN,
    borderBottomWidth: 0.2,
  },
  text: {
    marginLeft: 8,
    marginVertical: 7,
    paddingBottom: 5,
    fontSize: 16,
  },
  status: {
    padding: 10,
    textAlign: 'center',
  },
});
