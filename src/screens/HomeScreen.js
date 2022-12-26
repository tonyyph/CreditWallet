import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../components/Card';
import ListService from '../components/ListService';
import RecentTransaction from '../components/RecentTransaction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text>Hello</Text>
            <Text style={styles.userName}>{'Phan Khac Cuong'}</Text>
          </View>
          <TouchableOpacity onPress={clearOnboarding}>
            <Image source={require('../assets/ic_notif.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Card />
        </View>
        <ListService />
        <RecentTransaction />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    paddingVertical: 14,
  },
});
