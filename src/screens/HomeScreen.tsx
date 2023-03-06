/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
import {
  Text,
  View,
  Image,
  Modal,
  Platform,
  Animated,
  FlatList,
  StatusBar,
  Dimensions,
  StyleSheet,
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
import {Categories} from '@constants';
import {foods} from '@constants';
// redux
import {addToCart} from '../redux/cartSlice';
import {addToSum} from '../redux/cartSum';
import {useDispatch, useSelector} from 'react-redux';
//

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

export default function HomeScreen({navigation, item}: any) {
  // modal
  //
  // redux
  const notification = useSelector((state: any) => state.notification);
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
            <Text style={{fontSize: 17.4, fontWeight: 'bold'}}>
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
                  ),
                    dispatch(addToSum({price: food.price}));
                }}
                name="add"
                size={20}
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
              Xác nhận
            </Text>
          </View>
          <View style={[styles.Header2, {top: -10, paddingBottom: 10}]}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: Colors.DEFAULT_GREEN,
              }}>
              Thêm món ăn vào giỏ hàng
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
                Thêm vào
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible1(false)}>
              <Text
                style={{
                  color: Colors.DEFAULT_RED,
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Huỷ bỏ
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
            <Text style={{fontSize: 28, color: Colors.DEFAULT_GREEN}}>
              Xin chào,
            </Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                marginLeft: 5,
                color: Colors.DEFAULT_GREEN,
              }}>
              {item ? item : `Xuân Lê`}
            </Text>
          </View>
          <Text
            style={{marginTop: 5, fontSize: 22, color: Colors.DEFAULT_GREY}}>
            Bạn muốn ăn gì hôm nay?
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          {/*  */}
          <IconBadge
            MainElement={
              <View>
                <Image
                  source={require('../assets/images/avatar.webp')}
                  style={{height: 55, width: 55, borderRadius: 30}}
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
            // Hidden={this.state.BadgeCount == 0}
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
            placeholder="Tìm kiếm"></TextInput>
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
const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 20 : 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
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
  categoriesListContainer: {
    paddingVertical: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: Colors.DEFAULT_WHITE,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 25,
    borderRadius: 15,
    backgroundColor: Colors.DEFAULT_WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: Colors.DEFAULT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // modal
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'transparent',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  modalContainer1: {
    width: '70%',
    height: 140,
    backgroundColor: 'white',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    borderRadius: 15,
    elevation: 20,
  },
  Header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  Header2: {
    // paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 20,
    borderBottomWidth: 0.17,
    borderColor: Colors.DEFAULT_GREEN,
    width: '100%',
  },
  // modal
});
