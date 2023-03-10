/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
import {
  Text,
  View,
  Image,
  Modal,
  FlatList,
  Animated,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';

import {Colors} from '@constants';
import styles from '@css/HomeScreenStyle';
import {Categories} from '@constants';
import {foods} from '@constants';
// redux import
import {addToCart} from '../redux/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
//
export default function HomeScreen({navigation}: any) {
  // redux
  const notification = useSelector((state: any) => state.notification);
  const userName = useSelector((state: any) => state.user);
  const badge = notification.length;
  const dispatch = useDispatch();
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  // modal//
  const [visible, setVisible] = React.useState(true);
  const [visible1, setVisible1] = useState(false);
  const ModalPoup = ({visible, children}) => {
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
  // modal
  const ModalPoup1 = ({visible, children}) => {
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
            style={[
              styles.modalContainer1,
              {transform: [{scale: scaleValue}]},
            ]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  // modal2
  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {Categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex === index
                    ? Colors.DEFAULT_GREEN
                    : Colors.DEFAULT_WHITE,
                ...styles.categoryBtn,
              }}>
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex === index
                      ? Colors.DEFAULT_WHITE
                      : Colors.DEFAULT_YELLOW,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({food}: any) => {
    return (
      <TouchableHighlight
        underlayColor={Colors.DEFAULT_WHITE}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailCard', food)}>
        <View style={styles.card}>
          <View style={{alignItems: 'center', top: -25}}>
            <Image source={food.image} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text
              style={{
                fontSize: Platform.OS === 'ios' ? 17.4 : 13,
                fontWeight: Platform.OS === 'ios' ? 'bold' : '800',
                color: Colors.DEFAULT_GREEN,
              }}>
              {food.name}
            </Text>
            <Text
              style={{fontSize: 15, color: Colors.DEFAULT_GREY, marginTop: 2}}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {food.price}k
            </Text>

            <View style={styles.addToCartBtn}>
              <Icon
                onPress={() => {
                  dispatch(
                    addToCart({
                      id: food.id,
                      name: food.name,
                      ingredients: food.ingredients,
                      price: food.price,
                      image: food.image,
                      title: food.title,
                    }),
                  );
                }}
                name="add"
                size={26}
                color={Colors.DEFAULT_WHITE}
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.DEFAULT_WHITE}}>
      {/* modal */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ModalPoup visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.Header}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Icon
                  name="cancel"
                  size={36}
                  style={{color: Colors.DEFAULT_GREEN}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../assets/images/bigsale.png')}
              style={{height: 400, width: 460, marginVertical: 10}}
            />
          </View>
        </ModalPoup>
        {/* <Button title="Open Modal" onPress={() => setVisible(true)} /> */}
      </View>
      {/* modal */}
      {/* modal2 */}
      <ModalPoup1 visible={visible1}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={[styles.Header2, {borderBottomColor: Colors.DEFAULT_WHITE}]}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: Colors.DEFAULT_GREEN,
                paddingTop: 10,
              }}>
              X??c nh???n
            </Text>
          </View>
          <View style={[styles.Header2, {top: -10, paddingBottom: 10}]}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: Colors.DEFAULT_GREEN,
              }}>
              Th??m m??n ??n v??o gi??? h??ng
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              top: -10,
            }}>
            <TouchableOpacity onPress={() => setVisible1(false)}>
              <Text
                style={{
                  color: Colors.DEFAULT_GREEN,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Th??m v??o
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible1(false)}>
              <Text
                style={{
                  color: Colors.DEFAULT_RED,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Hu??? b???
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPoup1>
      {/*  */}

      {/* modal2 */}
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
      <View style={styles.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 32,
                color: Colors.DEFAULT_GREEN,
                fontWeight: '600',
              }}>
              {userName[0].userName
                ? 'Xin ch??o, ' + userName[0].userName
                : `Ch??o m???ng tr??? l???i`}
            </Text>
          </View>
          <Text
            style={{marginTop: 5, fontSize: 22, color: Colors.DEFAULT_GREY}}>
            B???n mu???n ??n g?? h??m nay?
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{right: Platform.OS === 'ios' ? 0 : 5}}>
          {/*  */}
          <IconBadge
            MainElement={
              <View>
                <Image
                  source={require('../assets/images/avatar.webp')}
                  style={{
                    height: Platform.OS === 'ios' ? 55 : 45,
                    width: Platform.OS === 'ios' ? 55 : 45,
                    borderRadius: 30,
                  }}
                />
              </View>
            }
            BadgeElement={<Text style={{color: '#FFFFFF'}}>{badge}</Text>}
            IconBadgeStyle={{
              marginRight: -9,
              marginTop: -4,
              width: 19,
              height: 20,
              backgroundColor: 'red',
            }}
          />
          {/*  */}
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} color={Colors.DEFAULT_GREEN} />
          <TextInput
            style={{flex: 1, fontSize: 18, marginLeft: 5}}
            placeholder="T??m ki???m"></TextInput>
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
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
    </SafeAreaView>
  );
}
