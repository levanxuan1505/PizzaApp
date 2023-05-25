/* eslint-disable quotes */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconss from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import {Colors} from '@constants';
import styles from '@css/ProfileScreenStyle';
import {ScrollView} from 'react-native-gesture-handler';
// redux
import {useSelector} from 'react-redux';
//

export default function ProfileScreen({navigation}: any) {
  const notification = useSelector((state: any) => state.notification);
  const userName = useSelector((state: any) => state.user);
  const order = useSelector((state: any) => state.order);
  const badge = notification.length;
  const Confirm = () => {
    return !order[0].order ? (
      <View>
        <Icons
          name="wallet-plus-outline"
          size={32}
          style={{color: Colors.DEFAULT_YELLOW}}
        />
      </View>
    ) : (
      <IconBadge
        MainElement={
          <View>
            <Icons
              name="wallet-plus-outline"
              size={32}
              style={{color: Colors.DEFAULT_YELLOW}}
            />
          </View>
        }
        BadgeElement={
          <Text style={{color: '#FFFFFF', fontSize: 12}}>{order[0].order}</Text>
        }
        IconBadgeStyle={{
          marginRight: -13,
          marginTop: -2,
          width: 4,
          height: 20,
          backgroundColor: 'red',
        }}
      />
    );
  };
  const Avatar = () => {
    return userName[0].userName ? (
      <Image
        source={require('../assets/images/avatar.webp')}
        style={{height: 55, width: 55, borderRadius: 50}}
      />
    ) : (
      <Image
        source={require('../assets/images/nouser.jpeg')}
        style={{height: 55, width: 55, borderRadius: 50}}
      />
    );
  };
  const Name = () => {
    return userName[0].userName ? (
      <Text
        style={{
          fontSize: Platform.OS === 'ios' ? 20 : 16,
          fontWeight: '600',
          color: Colors.DEFAULT_GREEN,
          paddingBottom: 3,
          paddingLeft: 10,
        }}>
        {userName[0].userName}
      </Text>
    ) : (
      <Text
        style={{
          fontSize: Platform.OS === 'ios' ? 20 : 16,
          fontWeight: '600',
          color: Colors.DEFAULT_GREEN,
          paddingBottom: 3,
        }}>
        Bạn chưa đăng nhập
      </Text>
    );
  };
  const Authentication = () => {
    return userName[0].userName ? (
      <Text
        style={{
          fontSize: Platform.OS === 'ios' ? 14 : 11,
          color: Colors.FACEBOOK_BLUE,
        }}>
        Thành viên Bạc
      </Text>
    ) : (
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text
          style={{
            fontSize: Platform.OS === 'ios' ? 14 : 11,
            color: Colors.FACEBOOK_BLUE,
          }}>
          Vui lòng đăng nhập
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <View>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            onPress={navigation.goBack}
            style={{position: 'absolute', left: 2, color: Colors.DEFAULT_GREEN}}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            Profile
          </Text>
          <TouchableOpacity
            style={styles.bell}
            onPress={() => navigation.navigate('Notification')}>
            <IconBadge
              MainElement={
                <View>
                  <Icons name="bell" size={30} style={styles.icon} />
                </View>
              }
              BadgeElement={
                <Text style={{color: '#FFFFFF'}}>
                  {userName[0].userName ? `${badge}` : 0}
                </Text>
              }
              IconBadgeStyle={{
                marginRight: -7,
                marginTop: -2,
                width: 17,
                height: 20,
                backgroundColor: 'red',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{right: 65, position: 'absolute'}}
            onPress={() => navigation.navigate('Setting')}>
            <View>
              <Icon name="settings" size={30} style={styles.icon} />
            </View>
          </TouchableOpacity>
          {/* setting icon */}
        </View>
        {/* information */}
        <View style={styles.information}>
          <Avatar />
          <View
            style={{
              left: 10,
            }}>
            <Name />
            <View
              style={{
                backgroundColor: Colors.DEFAULT_GREY,
                borderRadius: 10,
                paddingHorizontal: 8,
                paddingVertical: 2,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Authentication />
              <Icon
                name="arrow-forward-ios"
                style={{color: Colors.FACEBOOK_BLUE}}
              />
            </View>
          </View>
        </View>
        {/* Đơn mua  */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginTop: 14,
            }}>
            {/* Đơn mua */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icons
                  name="book-edit-outline"
                  size={32}
                  style={{color: Colors.FACEBOOK_BLUE}}
                />
                <Text
                  style={{
                    fontSize: Platform.OS === 'ios' ? 18 : 14,
                    paddingLeft: 8,
                    color: Colors.GOOGLE_BLUE,
                  }}>
                  Đơn mua
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Order')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: Platform.OS === 'ios' ? 16 : 12,
                    right: 2,
                    color: Colors.SECONDARY_RED,
                  }}>
                  Xem lịch sử mua hàng
                </Text>
                <Icon
                  name="arrow-forward-ios"
                  size={12}
                  color={Colors.SECONDARY_RED}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: 10,
              borderBottomWidth: 0.2,
              paddingBottom: 6,
              borderBottomColor: Colors.DEFAULT_GREEN,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Order');
                }}>
                <Confirm />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 15 : 12,
                  color: Colors.DEFAULT_GREEN,
                  paddingTop: 4,
                }}>
                Chờ xác nhận
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => navigation.navigate('Order')}>
                <Icons
                  name="wallet-giftcard"
                  size={32}
                  style={{color: Colors.DEFAULT_GREEN}}
                />

                <Text
                  style={{
                    fontSize: Platform.OS === 'ios' ? 15 : 12,
                    color: Colors.GOOGLE_BLUE,
                    paddingTop: 4,
                  }}>
                  Chờ lấy hàng
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icons
                name="truck-cargo-container"
                size={32}
                color={Colors.FACEBOOK_BLUE}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 15 : 12,
                  color: Colors.DEFAULT_YELLOW,
                  paddingTop: 4,
                }}>
                Đang giao
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icons
                name="star-shooting-outline"
                size={32}
                color={Colors.GOOGLE_BLUE}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 15 : 12,
                  color: Colors.FACEBOOK_BLUE,
                  paddingTop: 4,
                }}>
                Đánh giá
              </Text>
            </View>
          </View>
          {/* Tiện ích của tôi */}
          <View style={{marginTop: 12}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="book-online"
                  size={32}
                  style={{color: Colors.DEFAULT_GREEN}}
                />
                <Text
                  style={{
                    fontSize: Platform.OS === 'ios' ? 18 : 14,
                    paddingLeft: 8,
                    color: Colors.SECONDARY_RED,
                  }}>
                  Tiện ích của tôi
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: 10,
              borderBottomWidth: 0.2,
              paddingBottom: 6,
              borderBottomColor: Colors.DEFAULT_GREEN,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons
                name="wallet-outline"
                size={32}
                color={Colors.DEFAULT_YELLOW}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 15 : 12,
                  color: Colors.DEFAULT_GREEN,
                  paddingTop: 2,
                }}>
                {`  Ví Zalo Pay  `}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Voucher')}
              style={{justifyContent: 'center', alignItems: 'center', left: 2}}>
              <Icons
                name="wallet-giftcard"
                size={32}
                color={Colors.GOOGLE_BLUE}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 15 : 12,
                  color: Colors.FACEBOOK_BLUE,
                }}>
                Kho Voucher
              </Text>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                left: 4,
              }}>
              <Icons name="bitcoin" size={32} color={Colors.DEFAULT_GREEN} />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 15 : 12,
                  color: Colors.GOOGLE_BLUE,
                  paddingTop: 2,
                }}>
                Pizza Xu
              </Text>
            </View>
            <View
              style={{justifyContent: 'center', alignItems: 'center', left: 5}}>
              <Iconss
                name="wallet-outline"
                size={32}
                color={Colors.FACEBOOK_BLUE}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 15 : 12,
                  color: Colors.DEFAULT_YELLOW,
                  paddingTop: 2,
                }}>
                PizzaLater
              </Text>
            </View>
          </View>

          {/* Options */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              paddingVertical: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                paddingVertical: 12,
                borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
                paddingBottom: 8,
                borderBottomColor: Colors.GOOGLE_BLUE,
              }}>
              <Icons
                name="medal"
                size={26}
                style={{color: Colors.DEFAULT_GREEN}}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  color: Colors.GOOGLE_BLUE,
                }}>
                Khách hàng thân thiết
              </Text>
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 16 : 13,
                  position: 'absolute',
                  right: 20,
                  top: 15,
                  color: Colors.SECONDARY_RED,
                }}>
                Thành viên Bạc
              </Text>
              <Icon
                name="arrow-forward-ios"
                size={13}
                color={Colors.SECONDARY_RED}
                style={{position: 'absolute', right: 0}}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              paddingVertical: 5,
              borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
              paddingBottom: 6,
              borderBottomColor: Colors.DEFAULT_YELLOW,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}>
              <Icon
                name="live-tv"
                size={26}
                style={{color: Colors.DEFAULT_YELLOW}}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  color: Colors.DEFAULT_YELLOW,
                }}>
                Pizza Live
              </Text>
              <Icon
                name="arrow-forward-ios"
                size={13}
                color={Colors.DEFAULT_YELLOW}
                style={{position: 'absolute', right: 0}}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
              paddingBottom: 8,
              borderBottomColor: Colors.GOOGLE_BLUE,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}
              onPress={() => navigation.navigate('Bookmark')}>
              <Iconss
                name="bookmarks-outline"
                size={26}
                style={{color: Colors.GOOGLE_BLUE}}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  color: Colors.GOOGLE_BLUE,
                }}>
                Bookmark
              </Text>
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  position: 'absolute',
                  right: 20,
                  color: Colors.GOOGLE_BLUE,
                }}>
                9 Likes
              </Text>
              <Icon
                name="arrow-forward-ios"
                size={13}
                color={Colors.GOOGLE_BLUE}
                style={{position: 'absolute', right: 0}}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
              paddingBottom: 8,
              borderBottomColor: Colors.DEFAULT_GREEN,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}>
              <Icon
                name="history"
                size={26}
                style={{color: Colors.DEFAULT_GREEN}}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  color: Colors.DEFAULT_GREEN,
                }}>
                Đã xem gần đây
              </Text>
              <Icon
                name="arrow-forward-ios"
                size={13}
                color={Colors.DEFAULT_GREEN}
                style={{position: 'absolute', right: 0}}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
              paddingBottom: 8,
              borderBottomColor: Colors.DEFAULT_RED,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}>
              <Icons
                name="wallet-outline"
                size={26}
                style={{color: Colors.DEFAULT_RED}}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  color: Colors.SECONDARY_RED,
                }}>
                Số dư Tk Pizza
              </Text>
              <Icon
                name="arrow-forward-ios"
                size={13}
                color={Colors.SECONDARY_RED}
                style={{position: 'absolute', right: 0}}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
              paddingBottom: 8,
              borderBottomColor: Colors.FACEBOOK_BLUE,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}>
              <Iconss
                name="logo-bitcoin"
                size={26}
                style={{color: Colors.FACEBOOK_BLUE}}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  color: Colors.FACEBOOK_BLUE,
                }}>
                Pizza Xu
              </Text>
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 16 : 13,
                  paddingLeft: 8,
                  position: 'absolute',
                  right: 20,
                  color: Colors.FACEBOOK_BLUE,
                }}>
                4.000 Xu
              </Text>
              <Icon
                name="arrow-forward-ios"
                size={13}
                color={Colors.FACEBOOK_BLUE}
                style={{position: 'absolute', right: 0}}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Review')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
              paddingBottom: 8,
              borderBottomColor: Colors.DEFAULT_GREEN,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}>
              <Iconss
                name="md-star-half"
                size={26}
                style={{color: Colors.SECONDARY_GREEN}}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  color: Colors.SECONDARY_GREEN,
                }}>
                Review Pizza Video
              </Text>
              <Icon
                name="arrow-forward-ios"
                size={13}
                color={Colors.SECONDARY_GREEN}
                style={{position: 'absolute', right: 0}}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'relative',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
              paddingBottom: 8,
              borderBottomColor: Colors.DEFAULT_YELLOW,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Voucher');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}>
              <Iconss
                name="gift-outline"
                size={26}
                style={{color: Colors.DEFAULT_YELLOW}}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  color: Colors.DEFAULT_YELLOW,
                }}>
                Gói Siêu Vocher
              </Text>
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 16 : 13,
                  paddingLeft: 8,
                  position: 'absolute',
                  right: 20,
                  color: Colors.DEFAULT_YELLOW,
                }}>
                Tiết kiệm đến 139k
              </Text>
              <Icon
                name="arrow-forward-ios"
                size={13}
                color={Colors.DEFAULT_YELLOW}
                style={{position: 'absolute', right: 0}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
              paddingBottom: 8,
              borderBottomColor: Colors.DEFAULT_GREEN,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Setting')}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}>
              <Icon
                name="supervised-user-circle"
                size={26}
                style={{color: Colors.DEFAULT_GREEN}}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  color: Colors.DEFAULT_GREEN,
                }}>
                Thiết lập tài khoản
              </Text>
              <Icon
                name="arrow-forward-ios"
                size={13}
                color={Colors.DEFAULT_GREEN}
                style={{position: 'absolute', right: 0}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
              paddingBottom: 8,
              borderBottomColor: Colors.DEFAULT_RED,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}>
              <Iconss
                name="help-circle-outline"
                size={26}
                style={{color: Colors.DEFAULT_RED}}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  color: Colors.SECONDARY_RED,
                }}>
                Trung tâm trợ giúp
              </Text>
              <Icon
                name="arrow-forward-ios"
                size={13}
                color={Colors.SECONDARY_RED}
                style={{position: 'absolute', right: 0}}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 10,
              marginBottom: Platform.OS === 'ios' ? 280 : 350,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
              }}>
              <Icons
                name="wechat"
                size={26}
                style={{color: Colors.DEFAULT_GREEN}}
              />
              <Text
                style={{
                  fontSize: Platform.OS === 'ios' ? 17 : 13,
                  paddingLeft: 8,
                  color: Colors.DEFAULT_GREEN,
                }}>
                Trò chuyện cùng Pizza Food
              </Text>
              <Icon
                name="arrow-forward-ios"
                size={13}
                color={Colors.DEFAULT_GREEN}
                style={{position: 'absolute', right: 0}}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
