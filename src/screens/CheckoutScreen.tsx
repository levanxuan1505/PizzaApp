/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
// import Iconsss from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import {foods} from '@constants';
import {Colors} from '@constants';
import {Voucher} from '@components';
const CheckoutScreen = ({navigation}) => {
  const [name, setName] = useState('Lê Văn Xuân');
  const [phone, setPhone] = useState('(+84) 97 517 95 46');
  const [address, setAddress] = useState('Số 17, ngõ 75 Hồ Tùng Mậu');
  const [address1, setAddress1] = useState(
    'Phường Mai Dịch, Quận Cầu Giấy, Hà Nội',
  );
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
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  // const Voucher = () => {
  //   return (
  //     <View style={styles.voucher}>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           justifyContent: 'space-between',
  //           paddingLeft: 9,
  //         }}>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //           }}>
  //           <Icon
  //             name="payments"
  //             size={42}
  //             color={Colors.DEFAULT_GREEN}
  //             style={{paddingLeft: 4}}
  //           />

  //           <Text
  //             style={{
  //               fontSize: 20,
  //               color: Colors.DEFAULT_GREEN,
  //               paddingLeft: 5,
  //             }}>
  //             Pizza Voucher
  //           </Text>
  //         </View>
  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //             paddingTop: 3,
  //           }}>
  //           <Text style={{color: Colors.DEFAULT_GREEN, right: 10}}>
  //             Miễn phí vận chuyển
  //           </Text>
  //           <Icon
  //             name="arrow-forward-ios"
  //             size={20}
  //             color={Colors.DEFAULT_GREEN}
  //             style={{right: 10}}
  //           />
  //         </View>
  //       </View>
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           justifyContent: 'space-between',
  //           alignItems: 'center',
  //         }}>
  //         <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //           <Iconsss
  //             name="ios-server"
  //             size={30}
  //             style={{paddingLeft: 18, color: Colors.DEFAULT_GREEN}}
  //           />
  //           <Text
  //             style={{
  //               color: Colors.DEFAULT_YELLOW,
  //               paddingLeft: 13,
  //               marginTop: 0,
  //               fontSize: 18,
  //             }}>
  //             Dùng 400 xu
  //           </Text>
  //         </View>
  //         <View style={{right: 12}}>
  //           <Switch
  //             trackColor={{false: '#767577', true: Colors.DEFAULT_GREEN}}
  //             thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
  //             ios_backgroundColor="#3e3e3e"
  //             onValueChange={toggleSwitch}
  //             value={isEnabled}
  //           />
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };
  return (
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
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
          Thanh toán
        </Text>

        <View style={{position: 'absolute', right: 7}}>
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Local', {
                name,
                phone,
                address,
                address1,
              })
            }>
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
                  <Text>
                    {name} | {phone}
                  </Text>
                  <Text>{address},</Text>
                  <Text>{address1}</Text>
                </View>
              </View>
              <Icon
                name="arrow-forward-ios"
                size={20}
                color={Colors.DEFAULT_GREEN}
                style={{
                  position: 'absolute',
                  right: 28,
                  // paddingHorizontal: 50,
                }}
              />
            </View>
          </TouchableOpacity>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 15}}
            data={foods}
            renderItem={({item}) => <CartCard item={item} />}
            ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          />
          {/* Voucher */}
          <Voucher />
          {/* Thanh toán */}
          <View style={styles.payment}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 9,
                }}>
                <Iconss
                  name="bitcoin"
                  size={42}
                  color={Colors.DEFAULT_GREEN}
                  style={{
                    position: 'absolute',
                    paddingLeft: 12,
                    paddingTop: 18,
                  }}
                />

                <Text
                  style={{
                    fontSize: 20,
                    color: Colors.DEFAULT_GREEN,
                    paddingLeft: 50,
                    paddingBottom: 5,
                  }}>
                  Chọn phương thức thanh toán
                </Text>
                <Icon
                  name="arrow-forward-ios"
                  size={20}
                  color={Colors.DEFAULT_GREEN}
                  style={{
                    position: 'absolute',
                    right: 12,
                    paddingTop: 18,
                  }}
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
            size={44}
            color={Colors.DEFAULT_GREEN}
            style={{
              position: 'absolute',
              left: 35,
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
              backgroundColor: Colors.DEFAULT_GREEN,
              padding: 18,
              fontWeight: '800',
              color: Colors.DEFAULT_WHITE,
            }}>
            Đặt hàng
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
    position: 'relative',
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
    paddingBottom: 3,
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 15,
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
  voucher: {
    paddingBottom: 3,
    position: 'relative',
    borderRadius: 10,
    height: 100,
    marginBottom: 15,
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
export default CheckoutScreen;
