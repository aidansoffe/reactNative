import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default class Main extends Component {
    render() {
        return (
            <View style={{
                flex:1,
                backgroundColor: '#87ceeb',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }}>
                <Text style={{ fontSize: 35, color: '#ffffff'}}> Latã-ne </Text>
                <View style={{
                    flex: 1,
                    fontSize: 80,
                    backgroundColor: 'pink',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <TouchableOpacity
                    style={styles.button}
                        onPress={() => this.props.navigation.navigate('Profile')}
                    >
                        <Text style={{fontSize: 35, color: '#ffffff'}}> Sa ne sarutam fundul </Text>
                    </TouchableOpacity>
                    <Image
            source={require('../components/images/us.jpeg')}
            style={{width: 350, height: 350, marginTop: 25}}
          />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#87ceeb',
        padding: 10
    }
});


