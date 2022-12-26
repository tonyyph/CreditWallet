import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC34AUtd-6YKZ6yFyDyXK8B5Em9tXk4Ilg',
  authDomain: 'creditwallet-983b0.firebaseapp.com',
  projectId: 'creditwallet-983b0',
  storageBucket: 'creditwallet-983b0.appspot.com',
  messagingSenderId: '82340502159',
  appId: '1:82340502159:web:5324899e0500ca09442efa',
}; // Initialize Firebase

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {Loading: LoadingScreen, App: AppStack, Auth: AuthStack},
    {
      initialRouteName: 'Loading',
    },
  ),
);
