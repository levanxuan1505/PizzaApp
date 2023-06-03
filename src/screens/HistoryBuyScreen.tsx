/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
import {
  Text,
  View,
  Platform,
  LogBox,
  StatusBar,
  SafeAreaView,
} from 'react-native';

LogBox.ignoreLogs(['Sending...']);
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconss from 'react-native-vector-icons/FontAwesome';
import {Colors} from '@constants';
import styles from '@css/HistoryBuyScreenStyle';
import {OrderConfirmList} from '@components';
import {HistoryBuy} from '@components';
import {useSelector} from 'react-redux';
// redux import
//
export default function HistoryBuyScreen({navigation}: any) {
  const [option, setOption] = React.useState(0);
  const order = useSelector((state: any) => state.order);
  const waitForGood = useSelector((state: any) => state.waitForGood);
  const delivering = useSelector((state: any) => state.delivering);
  const evaluate = useSelector((state: any) => state.evaluate);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.DEFAULT_WHITE}}>
      <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
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
          Lịch sử mua hàng
        </Text>
        <View style={{position: 'absolute', right: 15}}>
          <Iconss
            name="history"
            size={32}
            color={Colors.DEFAULT_GREEN}
            style={{
              marginRight: Platform.OS === 'ios' ? 20 : 18,
              alignItems: 'center',
            }}
          />
        </View>
      </View>
      <View>
        <HistoryBuy setOption={setOption} />
      </View>
      {option === 0 ? (
        <OrderConfirmList
          navigation={navigation}
          data={order}
          indexOfDispatch={0}
        />
      ) : option === 1 ? (
        <OrderConfirmList
          navigation={navigation}
          data={waitForGood}
          indexOfDispatch={1}
        />
      ) : option === 2 ? (
        <OrderConfirmList
          navigation={navigation}
          data={delivering}
          indexOfDispatch={2}
        />
      ) : (
        <OrderConfirmList
          navigation={navigation}
          data={evaluate}
          indexOfDispatch={3}
        />
      )}
    </SafeAreaView>
  );
}
