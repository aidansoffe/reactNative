import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default class Profile extends Component {
    render() {
        return (
            <View style={Look.container}>
                <Text style={Look.Text}> Which Koyoyeva is this??  </Text>
                <View style={Look.goBackButton}>
                <TouchableOpacity
                style={Look.button}
                        onPress={() => this.props.navigation.navigate('Resource')}
                    >
                        <Text style={Look.textSize}>Click to reveal</Text>
                    </TouchableOpacity>
                    <Image
            source={require('../components/images/m.jpeg')}
            style={{width: 250, height: 250, marginTop: 25}}
          />
                </View>

            </View>
        );
    }
}
const Look = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'pink',
        alignItems: 'center',
        width: '100%'
    },
    Text: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        color: '#ffffff'
    },
    goBackButton: {
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    textSize: {
        color: '#ffffff',
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'Cochin'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#87ceeb',
        padding: 20
    }

});