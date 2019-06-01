import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/Home'
import Main from './src/Main'

const Navigation = StackNavigator({
  Home:{
    screen: 'Home',
  },
  Main:{
    screen: 'Main',
  }
})
export default Navigation: