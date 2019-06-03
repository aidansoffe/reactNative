import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class Resourse extends Component {
  render() {
    return (
      <View>
        <Text style={styles.Text}> Glad you asked!</Text>
        <View style={styles.goBackButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Friend')}
          >
            <Text style={{fontSize: 40, color: '#ffffff'}}>Ce Faci Tyrfa!!</Text>
          </TouchableOpacity>
          <Image
            source={require('../components/images/222.jpeg')}
            style={{width: 350, height: 350, marginTop: 20}}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  Text: {
    
    fontSize: 40,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    backgroundColor: 'pink',
    width: '100%',
    paddingLeft: 35
  },

  goBackButton: {
    
    marginTop: 90,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 10
  }
});