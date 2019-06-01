import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

export default class Home extends Component{
    render() {
      return (
          <View>
              <Text> Home Screen </Text>
              <Button title= "Go to main screen" onPress={()=>} />
          </View>
      );
    }
}