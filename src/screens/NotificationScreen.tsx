/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
  Modal,
  Animated,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';

import {Colors} from '@constants';
// import {notification} from '@constants';
// redux
import {useSelector, useDispatch} from 'react-redux';
import {deleteNotification} from '../redux/notificationSlice';
//
export default function NotificationScreen({navigation}) {
  // redux
  const dispatch = useDispatch();
  const notification = useSelector(state => state.notification);
  const a = notification.length;
  //delete item by checking if id is equal to the id of the item
  const onDelete = id => {
    dispatch(
      deleteNotification({
        id: id,
      }),
    );
  };
  //
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
  const CartCard = ({item}: any) => {
    return (
      <TouchableOpacity>
        <View style={styles.cartCard}>
          <Image
            source={item.image}
            style={{height: 50, width: 50, borderRadius: 50}}
          />
          <View
            style={{
              flex: 1,
              height: 100,
              marginLeft: 10,
              marginRight: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                color: Colors.DEFAULT_GREEN,
              }}>
              {item.name}
            </Text>
            <Text style={{fontSize: 13.5, color: Colors.DARK_THREE}}>
              {item.title}
            </Text>
          </View>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <View style={{marginRight: 16, alignItems: 'center'}}>
              <Iconss name="trash" size={28} color={Colors.DEFAULT_GREEN} />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
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
              Cảnh báo
            </Text>
          </View>
          <View
            style={[
              styles.Header,
              {top: -8, paddingBottom: 5, paddingHorizontal: 10},
            ]}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: Colors.DEFAULT_GREEN,
              }}>
              Bạn chắc chắn muốn xoá thông
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: Colors.DEFAULT_GREEN,
              }}>
              báo này
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: -5,
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
      </ModalPoup>
      {/* header */}
      <View style={styles.header}>
        <Icons
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
          Notification
        </Text>
        <View style={{position: 'absolute', right: 10}}>
          <IconBadge
            MainElement={
              <View>
                <Icon name="bell" size={32} color={Colors.DEFAULT_GREEN} />
              </View>
            }
            BadgeElement={<Text style={{color: '#FFFFFF'}}>{a}</Text>}
            IconBadgeStyle={{
              marginRight: -5,
              marginTop: -6,
              width: 17,
              height: 20,
              backgroundColor: 'red',
            }}
            // Hidden={this.state.BadgeCount == 0}
          />
        </View>
      </View>
      {/* header */}
      {/* FlastList */}
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          Platform.OS === 'ios' ? {paddingBottom: 80} : {paddingBottom: 100}
        }
        data={notification}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
      />
      {/* FlastList */}
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
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    borderRadius: 10,
    backgroundColor: Colors.DEFAULT_WHITE,
    marginVertical: 10,
    marginHorizontal: 20,
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

  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '65%',
    height: 148,
    backgroundColor: 'white',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    borderRadius: 15,
    elevation: 20,
  },
  Header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
  },
});
