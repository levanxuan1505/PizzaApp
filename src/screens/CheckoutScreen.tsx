/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Fontisto';
import IconBadge from 'react-native-icon-badge';
import {foods} from '@constants';
import {Colors} from '@constants';

export default function ({navigation}) {
  const CartCard = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('DetailCard', item)}>
        <View style={styles.cartCard}>
          <Image
            source={item.image}
            style={{
              height: Platform.OS === 'ios' ? 80 : 70,
              width: Platform.OS === 'ios' ? 80 : 70,
            }}
          />
          <View
            style={{
              height: 100,
              marginLeft: Platform.OS === 'ios' ? 10 : 15,
              paddingVertical: 20,
              flex: 1,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
            <Text style={{fontSize: 13, color: Colors.DEFAULT_GREY}}>
              {item.ingredients}
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              {item.price}k
            </Text>
          </View>
          <View
            style={{
              marginRight: 20,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginVertical: 5}}>
              x{Math.floor(Math.random() * 5) + 1}
            </Text>
            {/* <View style={styles.actionBtn}>
              <Icon name="remove" size={25} color={Colors.DEFAULT_WHITE} />
              <Icon name="add" size={25} color={Colors.DEFAULT_WHITE} />
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          onPress={navigation.goBack}
          color={Colors.DEFAULT_GREEN}
          style={{position: 'absolute', left: 5}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.DEFAULT_GREEN,
          }}>
          Thanh toán
        </Text>

        <View style={{position: 'absolute', right: 12}}>
          <IconBadge
            MainElement={
              <View>
                <Iconss
                  name="cart-check"
                  size={32}
                  color={Colors.DEFAULT_GREEN}
                />
              </View>
            }
            BadgeElement={<Text style={{color: '#FFFFFF'}}>3</Text>}
            IconBadgeStyle={{
              marginRight: -16,
              marginTop: -7,
              width: 17,
              height: 20,
              backgroundColor: 'red',
            }}
            // Hidden={this.state.BadgeCount == 0}
          />
        </View>
      </View>
      {/* body */}
      <View style={{position: 'relative'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <TouchableOpacity onPress={() => navigation.navigate('Local')}>
            <View style={styles.location}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 9,
                }}>
                <Icon
                  name="location-pin"
                  size={28}
                  color={Colors.DEFAULT_GREEN}
                />
                <Text>Địa chỉ nhận hàng</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{paddingLeft: 15}}>
                  <Text>Lê Văn Xuân | (+84) 97 517 95 46</Text>
                  <Text>Số 17 ngõ 75 Hồ Tùng Mậu,</Text>
                  <Text>Phường Mai Dịch, Quận Cầu Giấy, Hà Nội</Text>
                </View>
                <Icon
                  name="arrow-forward-ios"
                  size={20}
                  color={Colors.DEFAULT_GREEN}
                  style={{right: 0, paddingHorizontal: 50}}
                />
              </View>
            </View>
          </TouchableOpacity>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 15}}
            data={foods}
            renderItem={({item}) => <CartCard item={item} />}
            ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          />

          {/* Thanh toán */}
          <View style={styles.payment}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 9,
                  marginTop: 9,
                }}>
                <Iconss
                  name="bitcoin"
                  size={42}
                  color={Colors.DEFAULT_GREEN}
                  style={{paddingLeft: 3, paddingRight: 5}}
                />

                <Text
                  style={{
                    fontSize: 20,
                    color: Colors.DEFAULT_GREEN,
                  }}>
                  Chọn phương thức thanh toán
                </Text>
                <Icon
                  name="arrow-forward-ios"
                  size={20}
                  color={Colors.DEFAULT_GREEN}
                  style={{position: 'absolute', right: 20}}
                />
              </View>
              <Text
                style={{
                  color: Colors.DEFAULT_YELLOW,
                  paddingLeft: 60,
                  marginTop: 0,
                }}>
                Thanh toán dễ dàng hơn với Zalo Pay
              </Text>
            </View>
          </View>
          <View style={styles.totalBill}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <Icons name="calendar" size={24} color={Colors.DEFAULT_GREEN} />
              <Text
                style={{
                  color: Colors.DEFAULT_GREEN,
                  paddingLeft: 15,
                  fontSize: 20,
                }}>
                Chi tiết thanh toán
              </Text>
            </View>
            <View style={{paddingTop: 7}}>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Tổng tiền hàng</Text>
                <Text>đ177.000</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Tổng tiền phí vận chuyển</Text>
                <Text>đ15.000</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18, color: Colors.DEFAULT_GREEN}}>
                  Tổng thanh toán
                </Text>
                <Text style={{fontSize: 18, color: Colors.DEFAULT_YELLOW}}>
                  đ192.742
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.warning}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <Icon
                name="library-books"
                size={26}
                color={Colors.DEFAULT_GREEN}
              />
              <Text
                style={{
                  color: Colors.DEFAULT_GREEN,
                  paddingLeft: 7,
                  paddingRight: Platform.OS === 'ios' ? 7 : 20,
                  fontSize: 16,
                }}>
                {`Nhấn "Đặt hàng" đồng nghĩa với việc bạn 
đồng ý tuân theo "Điều khoản của Pizza"`}
              </Text>
            </View>
          </View>
        </ScrollView>
        {/* fixed total */}
        <View style={styles.total}>
          <Icons
            name="opencart"
            size={42}
            color={Colors.DEFAULT_GREEN}
            style={{
              position: 'absolute',
              left: 40,
              top: 10,
            }}
          />
          <View>
            <Text
              style={{
                color: Colors.DEFAULT_GREEN,
                fontSize: 18,
                paddingRight: 10,
              }}>
              Tổng thanh toán
            </Text>
            <Text style={{color: Colors.DEFAULT_GREEN, fontSize: 18}}>
              đ192.742
            </Text>
          </View>
          <Text
            style={{
              fontSize: 22,
              backgroundColor: Colors.DEFAULT_YELLOW,
              padding: 18,
              color: Colors.DEFAULT_WHITE,
            }}>
            Đặt hàng
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    position: 'relative',
  },
  location: {
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 8,
    paddingLeft: 10,
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
  payment: {
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
    justifyContent: 'center',
    // marginTop: 10,
    marginHorizontal: 8,
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
  totalBill: {
    borderRadius: 10,
    height: 130,
    marginBottom: 10,
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 8,
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
  warning: {
    borderRadius: 10,
    height: 80,
    marginBottom: Platform.OS === 'ios' ? 140 : 180,
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 8,
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
  money: {
    flexDirection: 'row',
  },
  moneyText: {
    fontSize: 26,
    fontWeight: 700,
    paddingRight: 5,
    color: Colors.DEFAULT_GREEN,
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
  total: {
    backgroundColor: Colors.DEFAULT_WHITE,
    // paddingHorizontal: 30,

    flexDirection: 'row',
    paddingBottom: Platform.OS === 'ios' ? 55 : 87,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
