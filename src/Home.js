import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.welcome}>
                    <Text style={styles.welcomeSize}>Welcome Hooman</Text>
                </View>

                <View style={styles.instructions}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Main')}
                    >
                        <Text>Touch Here</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.blue}>
                    <Text style={styles.luckySize}>Here You Are</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'yellow',
    },
    welcome: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'pink',
        alignItems: 'center',
        width: '100%'
    },
    instructions: {
        flex: 1,
        backgroundColor: '#87ceeb',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    blue: {
        flex: 1,
        backgroundColor: '#d8bfd8',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    luckySize: {
        fontSize: 40,
        color: '#6a5acd',
        fontWeight: 'bold',
        fontFamily: 'Cochin'
    },
    welcomeSize: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Cochin'
    },

    ByeSize: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Cochin'
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10
    },
});
