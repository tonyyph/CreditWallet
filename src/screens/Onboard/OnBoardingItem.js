import React from 'react';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';

const OnBoardingItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item?.image}
        style={[styles.image, {width: width / 1.25, resizeMode: 'contain'}]}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.description}>{item?.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  textContainer: {
    flex: 0.3,
  },
  title: {
    fontWeight: '800',
    marginBottom: 10,
    fontSize: 28,
    textAlign: 'center',
    color: '#520339B2',
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
