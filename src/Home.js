import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.welcome}><Text style={styles.welcomeSize}>Welcome Kiti!</Text></View>
                <View style={styles.instructions}>
                    <TouchableOpacity
                        // style={}
                        onPress={() => this.props.navigation.navigate('Main')}
                    >
                        <Text> Touch Here </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.blue}><Text style={styles.luckySize}>lucky</Text></View>

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
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#fffff0',
        borderRadius: 30,
        borderWidth: 10,
        paddingLeft: 60,
        paddingRight: 60,
        borderColor: '#fff'
    },
    tapSize: {
        fontSize: 30,
        fontFamily: 'Cochin',
        color: '#ff69b4'
    }


});
