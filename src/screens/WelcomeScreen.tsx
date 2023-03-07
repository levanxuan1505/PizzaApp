import React, {useState, useRef} from 'react';
import {View, Text, StatusBar, FlatList, TouchableOpacity} from 'react-native';

import {Separator, WelcomeCard} from '@components';
import {Colors, General} from '@constants';
import styles from '@css/WelcomeScreenStyle';
import {Display} from '../utils';

const pageStyle = (isActive: boolean) =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Colors.DEFAULT_GREY};

const Pagination = ({index}: any) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i} />
        ) : (
          <View style={pageStyle(false)} key={i} />
        ),
      )}
    </View>
  );
};

const WelcomeScreen = ({navigation}: any) => {
  const [welcomeListIndex, setWelcomeListIndex] = useState(0);
  const welcomeList: any = useRef();
  const onViewRef = useRef(({changed}: any) => {
    setWelcomeListIndex(changed[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const pageScroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomeListIndex < 2 ? welcomeListIndex + 1 : welcomeListIndex,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} width={undefined} />
      <Separator height={Display.setHeight(8)} width={undefined} />
      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeList}
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({item}) => <WelcomeCard {...item} />}
        />
      </View>
      <Separator height={Display.setHeight(8)} width={undefined} />
      <Pagination index={welcomeListIndex} />
      <Separator height={Display.setHeight(8)} width={undefined} />
      {welcomeListIndex === 2 ? (
        <TouchableOpacity
          style={styles.gettingStartedButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Options')}>
          <Text style={styles.gettingStartedButtonText}>Bắt đầu</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => welcomeList.current.scrollToEnd()}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => pageScroll()}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default WelcomeScreen;
