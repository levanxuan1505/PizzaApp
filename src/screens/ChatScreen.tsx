/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '@css/ProfileScreenStyle';
import {Colors} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Display} from '@utils';
const ChatScreen = ({navigation}: any) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 3,
        text: 'Nếu bạn có khó khăn gì trong quá trình đặt món ăn, đừng ngại để lại câu hỏi cho chúng tôi ?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Chào bạn, bạn cần mình hỗ trợ gì ?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Xin chào Pizza Food',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 0, marginRight: 10}}
            size={45}
            color="#00AA13"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#00AA13',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={32} color="#333" />;
  };

  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <View style={styles.headerChat}>
          <Icon
            name="arrow-back-ios"
            size={28}
            onPress={navigation.goBack}
            style={{
              position: 'absolute',
              left: 20,
              color: Colors.DEFAULT_GREEN,
            }}
          />
          <Text
            style={{
              fontSize: Display.setWidth(6),
              fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
            }}>
            Message
          </Text>
          <Icon
            name="message"
            size={28}
            onPress={navigation.goBack}
            style={{
              position: 'absolute',
              right: 25,
              color: Colors.DEFAULT_GREEN,
            }}
          />
        </View>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
          scrollToBottomComponent={scrollToBottomComponent}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
