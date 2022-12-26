import {FlatList, StyleSheet, View, Animated} from 'react-native';
import React, {useState, useRef} from 'react';
import slide from './Onboard/slide';
import OnBoardingItem from './Onboard/OnBoardingItem';
import Paginator from './Onboard/Paginator';
import NextButton from './Onboard/NextButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = async () => {
    if (currentIndex < slide.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      try {
        await AsyncStorage.setItem('@viewedOnboarding', 'false');
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FlatList
          data={slide}
          renderItem={({item}) => <OnBoardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item?.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slide} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slide.length)}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  mainContainer: {flex: 3},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
