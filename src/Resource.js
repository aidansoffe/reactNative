import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Resourse extends Component {
  render() {
    return (
      <View>
        <Text style={styles.Text}> Hi!</Text>
        <View style={styles.goBackButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text>Go Back Home</Text>
          </TouchableOpacity>
          <Image
            source={require('../components/images/2.jpeg')}
            style={{width: 200, height: 200}}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'yellow',
  },
  Text: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  },

  goBackButton: {
    marginTop: 90,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10
  }
});