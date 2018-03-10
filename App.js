
import React , { Component } from 'react';
import { 
    Text,
    StyleSheet, 
} from 'react-native';

import Routes from './src/component/Routes';
import Firebase from 'firebase';

export default class App extends Component {
  componentWillMount() {
    Firebase.initializeApp({
        apiKey: "AIzaSyDKIhm2W1E8fgectu7UL1C5llhRxg9R1dA",
        authDomain: "finalproject-6d29e.firebaseapp.com",
        databaseURL: "https://finalproject-6d29e.firebaseio.com",
        projectId: "finalproject-6d29e",
        storageBucket: "finalproject-6d29e.appspot.com",
        messagingSenderId: "931573093585"
    })
}
  render() {
      return (
          <Routes/>
      );
  }
}