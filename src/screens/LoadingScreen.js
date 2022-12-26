import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Img from '../assets/images';

const animationSize = 300;
const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={Img.skeleton}
        autoPlay
        loop
        style={{width: animationSize, height: animationSize}}
      />
      {/* <LottieView
        style={styles.loadingFooter}
        source={Img.loadingFooter}
        autoPlay
        loop
      /> */}
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoading: {
    textAlign: 'center',
    fontWeight: '600',
    // color: 'white',
  },
  loadingFooter: {
    position: 'absolute',
    top: 80,
  },
});
