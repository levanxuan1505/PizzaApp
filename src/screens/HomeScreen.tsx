/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Modal,
  Image,
  Animated,
  LogBox,
  FlatList,
  StatusBar,
  SafeAreaView,
  RefreshControl,
  TouchableHighlight,
} from 'react-native';
import {Display} from '@utils';
LogBox.ignoreLogs(['Sending...']);
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@constants';
import styles from '@css/HomeScreenStyle';
import {foodList} from '@constants';

import {Card, ListCategories, Header} from '@components';
// redux import
import {useSelector} from 'react-redux';
//
export default function HomeScreen({navigation}: any) {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);
  // redux
  const food = useSelector((state: any) => state.food);
  // modal//
  const [visible, setVisible] = useState(true);
  const ModalPopup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          // duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
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
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.DEFAULT_WHITE}}>
      {/* modal */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ModalPopup visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.Header}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => setVisible(false)}>
                <Icon
                  name="cancel"
                  size={36}
                  style={{color: Colors.DEFAULT_GREEN}}
                />
              </TouchableHighlight>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/images/bigsale.png')}
              style={{
                height: Display.setWidth(100),
                width: Display.setWidth(90),
                marginVertical: 10,
              }}
            />
          </View>
        </ModalPopup>
      </View>

      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      <Header navigation={navigation} />
      <View
        style={{
          marginTop: Display.setWidth(1.6),
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={styles.inputContainer}>
          <Icon
            name="search"
            size={Display.setHeight(4)}
            color={Colors.DEFAULT_GREEN}
          />
          <TextInput
            style={{flex: 1, fontSize: Display.setWidth(5), marginLeft: 5}}
            placeholder="Tìm kiếm"></TextInput>
          <TouchableHighlight underlayColor="transparent">
            <Icons
              name="camera-outline"
              size={Display.setHeight(4)}
              color={Colors.DEFAULT_GREEN}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.sortBtn}>
          <Icon
            name="tune"
            size={Display.setHeight(4)}
            color={Colors.DEFAULT_WHITE}
          />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={{paddingTop: 10}}
        data={foodList[food[0].id]}
        renderItem={({item}) => <Card navigation={navigation} food={item} />}
      />
    </SafeAreaView>
  );
}
