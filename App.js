import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/login';
import Register from './components/register';
import home from './components/home';
import loadScreen from './components/loadScreen';
import book from './components/Booking/book';
import Contact from './components/Contact/Contact';
import BulkPickup from './components/BulkPickup/BulkPickup'
import GetRates from './components/GetRates/GetRates';
import * as firebase from 'firebase';
import Dashboard from './components/Dashboard';

var firebaseConfig = {
  apiKey: 'AIzaSyDpVPdQ30QGN6Mnuo_082emzzlNidHWYr0',
  authDomain: 'waste-connect-170c8.firebaseapp.com',
  databaseURL: 'https://waste-connect-170c8.firebaseio.com',
  projectId: 'waste-connect-170c8',
  storageBucket: 'waste-connect-170c8.appspot.com',
  messagingSenderId: '784247414346',
  appId: '1:784247414346:web:24de139f606659a40810b3',
  measurementId: 'G-J7386M4LJ3',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const appStack = createStackNavigator({
  Dashboard: Dashboard,
  'Book A Pickup': book,
  'Bulk Pickup':BulkPickup,
  'Get Rates':GetRates,
  'Contact':Contact,
});

const authStack = createStackNavigator(
  {
    Register: Register,
    Login: Login,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: loadScreen,
      Auth: authStack,
      App: appStack,
    },
    {
      initialRouteName: 'Loading',
    }
  )
);
