import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';

import * as firebase from 'firebase';
import React from 'react';
import Navigator from './src/navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import SettingsScreen from './src/screens/SettingsScreen';
import MessageScreen from './src/screens/MessageScreen';
import PostScreen from './src/screens/PostScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MainQuiz from './src/screens/MainQuiz';

const firebaseConfig = {
  apiKey: 'AIzaSyC34AUtd-6YKZ6yFyDyXK8B5Em9tXk4Ilg',
  authDomain: 'creditwallet-983b0.firebaseapp.com',
  projectId: 'creditwallet-983b0',
  storageBucket: 'creditwallet-983b0.appspot.com',
  messagingSenderId: '82340502159',
  appId: '1:82340502159:web:5324899e0500ca09442efa',
}; // Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.customButton}>
      <Ionicons name="ios-add-circle" style={styles.postButton} />
    </TouchableOpacity>
  );
};

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Ionicons
            name="ios-home"
            size={36}
            color={tintColor}
            style={styles.icon}
          />
        ),
      },
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Ionicons
            name="ios-chatbox"
            size={36}
            color={tintColor}
            style={styles.icon}
          />
        ),
      },
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <TouchableOpacity style={styles.customButton}>
            <Ionicons
              name="ios-add-circle"
              size={75}
              color={'#04707c'}
              style={styles.postButton}
            />
          </TouchableOpacity>
        ),
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Ionicons
            name="ios-notifications-circle"
            size={36}
            color={tintColor}
            style={styles.icon}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Ionicons
            name="ios-person"
            size={36}
            color={tintColor}
            style={styles.icon}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#161f3d',
      inactiveTintColor: '#c2c4ca',
      showLabel: false,
      style: {
        position: 'absolute',
        elevation: '0',
        backgroundColor: '#08979c',
        borderRadius: 30,
        height: 110,
        justifyContent: 'flex-start',
      },
      inactiveBackgroundColor: '#08979c',
    },
  },
);

const AuthStack = createStackNavigator({
  Login: MainQuiz,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {Loading: MainQuiz, App: AppTabNavigator, Auth: AuthStack},
    {
      initialRouteName: 'Loading',
    },
  ),
);

const styles = StyleSheet.create({
  icon: {top: 30, position: 'absolute'},
  postButton: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -4,
    position: 'absolute',
  },
  customButton: {
    top: -50,
    height: 70,
    width: 70,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
