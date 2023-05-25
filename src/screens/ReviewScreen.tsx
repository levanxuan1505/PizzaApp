import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {Colors} from '@constants';

import YouTube from 'react-native-youtube';
import {videoReview} from '@constants';
export default function ReviewScreen({navigation}: any) {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);
  const Card = (video: any) => {
    <div style={{backgroundColor: 'red'}}>
      <YouTube
        videoId="vNmquGbmClY" // The YouTube video ID
        play={false} // control playback of video with true/false
        fullscreen // control whether the video should play in fullscreen or inline
        loop={false} // control whether the video should loop when ended
        // onReady={e => this.setState({isReady: true})}
        // onChangeState={e => this.setState({status: e.state})}
        // onChangeQuality={e => this.setState({quality: e.quality})}
        // onError={e => this.setState({error: e.error})}
        style={{alignSelf: 'stretch', height: 300}}
      />
    </div>;
  };
  return (
    <SafeAreaView>
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
          Review
        </Text>
        <View style={{position: 'absolute', right: 15}}>
          <Icons
            name="ios-tv-outline"
            size={32}
            color={Colors.DEFAULT_GREEN}
            style={{
              marginRight: Platform.OS === 'ios' ? 20 : 18,
              alignItems: 'center',
            }}
          />
        </View>
      </View>
      <ScrollView style={{paddingHorizontal: 5}}>
        <YouTube
          videoId="vNmquGbmClY" // The YouTube video ID
          play={false} // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop={false} // control whether the video should loop when ended
          // onReady={e => this.setState({isReady: true})}
          // onChangeState={e => this.setState({status: e.state})}
          // onChangeQuality={e => this.setState({quality: e.quality})}
          // onError={e => this.setState({error: e.error})}
          style={{alignSelf: 'stretch', height: 300}}
        />
        <Text
          style={{
            fontSize: 22,
            paddingLeft: 10,
            paddingBottom: 15,
            fontWeight: '400',
            paddingTop: 10,
          }}>
          Hôm Nay mình Review THE PIZZA COMPANY
        </Text>

        {/* <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={{paddingTop: 10}}
        data={videoReview}
        renderItem={({item}) => <Card video={item} />}
      /> */}
        <YouTube
          videoId="od9t4G5N6yQ" // The YouTube video ID
          play={false} // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop={false} // control whether the video should loop when ended
          // onReady={e => this.setState({isReady: true})}
          // onChangeState={e => this.setState({status: e.state})}
          // onChangeQuality={e => this.setState({quality: e.quality})}
          // onError={e => this.setState({error: e.error})}
          style={{alignSelf: 'stretch', height: 300}}
        />
        <Text
          style={{
            fontSize: 22,
            paddingLeft: 10,
            paddingBottom: 15,
            fontWeight: '400',
            paddingTop: 10,
          }}>
          ĂN MỘT TÍ THÔI | TẬP 22: REVIEW THE PIZZA COMPANY MÓN NÀO LÀ NGON
          NHẤT?
        </Text>

        <YouTube
          videoId="GCZFnC9CvH4" // The YouTube video ID
          play={false} // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop={false} // control whether the video should loop when ended
          // onReady={e => this.setState({isReady: true})}
          // onChangeState={e => this.setState({status: e.state})}
          // onChangeQuality={e => this.setState({quality: e.quality})}
          // onError={e => this.setState({error: e.error})}
          style={{alignSelf: 'stretch', height: 300}}
        />
        <Text
          style={{
            fontSize: 22,
            paddingLeft: 10,
            paddingBottom: 15,
            fontWeight: '400',
            paddingTop: 10,
          }}>
          NGON XỈU PIZZA HẢI SẢN XỐT MÀU XANH CỰC LẠ | 1 NGÀY GO GREEN CỦA LU |
          THÁNH ĂN TV
        </Text>

        <YouTube
          videoId="LKNZm6HibZk" // The YouTube video ID
          play={false} // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop={false} // control whether the video should loop when ended
          // onReady={e => this.setState({isReady: true})}
          // onChangeState={e => this.setState({status: e.state})}
          // onChangeQuality={e => this.setState({quality: e.quality})}
          // onError={e => this.setState({error: e.error})}
          style={{alignSelf: 'stretch', height: 300}}
        />
        <Text
          style={{
            fontSize: 22,
            paddingLeft: 10,
            paddingBottom: 15,
            fontWeight: '400',
            paddingTop: 10,
          }}>
          PHÁT HIỆN BÍ MẬT ĐỘNG TRỜI CỦA THE PIZZA COMPANY | CÁCH LÀM PIZZA NGON
          THƠM | SẤP MẶT CÙNG WOOSSI
        </Text>

        <YouTube
          videoId="lA7rzzmLsQQ" // The YouTube video ID
          play={false} // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop={false} // control whether the video should loop when ended
          // onReady={e => this.setState({isReady: true})}
          // onChangeState={e => this.setState({status: e.state})}
          // onChangeQuality={e => this.setState({quality: e.quality})}
          // onError={e => this.setState({error: e.error})}
          style={{alignSelf: 'stretch', height: 300}}
        />
        <Text
          style={{
            fontSize: 22,
            paddingLeft: 10,
            paddingBottom: 70,
            fontWeight: '400',
            paddingTop: 10,
          }}>
          REVIEW SƯỜN SIÊU SAO | COMBO MỚI TẠI THE PIZZA COMPANY CÓ GÌ NGON? |
          CHÁP CHÁP CÙNG WOOSSI
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? 0 : 20,
    paddingVertical: 20,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
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
});
