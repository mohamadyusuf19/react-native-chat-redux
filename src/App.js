import React, { Component } from 'react';
import {  View, Text, YellowBox, StatusBar, BackHandler, Platform } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ComponentRouter from './config/Routes';

export default class App extends Component {
  constructor() {
    super();
    console.ignoredYellowBox = [
    'Warning', 'Setting a timer'
    ];
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCE-k8w0uQwNl7Pd788nPzmKWcfFlSktRE",
      authDomain: "messenger-4e5ab.firebaseapp.com",
      databaseURL: "https://messenger-4e5ab.firebaseio.com",
      projectId: "messenger-4e5ab",
      storageBucket: "messenger-4e5ab.appspot.com",
      messagingSenderId: "549053080716"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))   
    
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
            backgroundColor="#000"
            barStyle="light-content"
        />
        <Provider store={store}>
          <ComponentRouter/>
        </Provider>      
      </View>      
    );
  }
}
