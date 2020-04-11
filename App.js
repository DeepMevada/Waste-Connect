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
  apiKey: YOUR_API_KEY_HERE,
  authDomain: YOUR_AUTH_DOMAIN_HERE,
  databaseURL: YOUR_DB_URL_HERE,
  projectId: YOUR_P_ID_HERE,
  storageBucket: YOUR_S_BUCKET_HERE,
  messagingSenderId: YOUR_MS_ID_HERE,
  appId: YOUR_APP_ID_HERE,
  measurementId: YOUR_M_ID_HERE,
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
