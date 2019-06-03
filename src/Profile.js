import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default class Profile extends Component {
    render() {
        return (
            <View style={Look.container}>
                <Text style={Look.Text}> Moya Koyoyeva!!  </Text>
                <View style={Look.goBackButton}>
                <TouchableOpacity
                style={Look.button}
                        onPress={() => this.props.navigation.navigate('Resource')}
                    >
                        <Text>Go Back Home</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
const Look = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        // marginBottom: 0,
        justifyContent: 'center',
        backgroundColor: '#ff69b4',
        alignItems: 'center',
        width: '100%'
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