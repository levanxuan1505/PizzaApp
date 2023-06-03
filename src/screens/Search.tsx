/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  Animated,
  Keyboard,
  TextInput,
  Platform,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, history} from '@constants';
import styles from '@css/SearchScreenStyle';
import {listTotal} from '@constants';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {Display} from '@utils';

export default function Search({navigation}) {
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
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
  const CartCard = ({item}: any) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => navigation.navigate('DetailCard', item)}>
        <View style={styles.cartCard}>
          <Image
            source={item.image}
            style={{
              height: Platform.OS === 'ios' ? 80 : 70,
              width: Platform.OS === 'ios' ? 80 : 70,
              borderRadius: 40,
            }}
          />
          <View
            style={{
              height: 100,
              marginLeft: Platform.OS === 'ios' ? 10 : 15,
              paddingVertical: 20,
              flex: 1,
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 17,
                color: Colors.DEFAULT_GREEN,
              }}>
              {item.name}
            </Text>
            <Text style={{fontSize: 14, color: Colors.DARK_FOUR}}>
              {item.ingredients}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '600',
                color: Colors.GOOGLE_BLUE,
              }}>
              {item.price}k
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  const filterFood = () =>
    listTotal.filter((food, index): any =>
      food.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  const Condition = () =>
    filterFood().length > 0 ? (
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        data={listTotal.filter((food, index) =>
          food.name.toLowerCase().includes(searchText.toLowerCase()),
        )}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
      />
    ) : (
      <View style={styles.result}>
        <Text
          style={{
            fontSize: Display.setWidth(8) - 14,
            color: 'red',
            fontWeight: '700',
          }}>
          Không có kết quả
        </Text>
      </View>
    );

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
          }}>
          <View style={styles.inputContainer}>
            <Icon
              name="search"
              size={Display.setWidth(8)}
              color={Colors.DEFAULT_GREEN}
            />
            <TextInput
              style={{flex: 1, fontSize: Display.setWidth(5), marginLeft: 5}}
              placeholder="Tìm kiếm"
              onSubmitEditing={Keyboard.dismiss}
              autoCorrect={false}
              onChangeText={(text: string) => {
                setSearchText(text);
              }}
            />
            <TouchableOpacity>
              <Icons
                name="camera-outline"
                size={Display.setWidth(8)}
                color={Colors.DEFAULT_GREEN}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.sortBtn}>
            <Icon
              name="tune"
              size={Display.setWidth(8)}
              color={Colors.DEFAULT_WHITE}
            />
          </View>
        </View>
        {searchText.length ? (
          <Condition />
        ) : (
          <ScrollView>
            <View style={styles.History}>
              <View>
                {history.map((history, index) => (
                  <TouchableOpacity
                    style={styles.history}
                    key={index}
                    onPress={() => setSearchText(history.title)}>
                    <Icon
                      name="history"
                      color={Colors.DEFAULT_GREEN}
                      size={Display.setWidth(8)}
                    />
                    <Text style={styles.text}>{history.title}</Text>
                    <Icons
                      name="trash"
                      size={27}
                      onPress={() => setVisible(true)}
                      color={Colors.DEFAULT_GREEN}
                      style={{
                        position: 'absolute',
                        right: -Display.setWidth(1.1),
                      }}
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
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
