import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.first}>
                <TouchableOpacity
                        style={styles.button1}
                            onPress={() => this.props.navigation.navigate('Main')}
                        >
                            <Text style={ styles.firstSize}> Main </Text>
                        </TouchableOpacity>
                </View>

                <View style={styles.second}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Profile')}
                    >
                        
                        <Text style={styles.secondSize}>Profile</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.third}>
                <TouchableOpacity
                style={styles.button2}
                        onPress={() => this.props.navigation.navigate('Resource')}
                    >
                        <Text style={styles.thirdSize}>Resource</Text>
                    </TouchableOpacity>

                    {/* <Text style={styles.thirdSize}>Here You Are</Text> */}
                </View>

                <View style={styles.fourth}>
                <TouchableOpacity
                        style={styles.button3}
                            onPress={() => this.props.navigation.navigate('Friend')}
                        >
                            <Text style={ styles.fourthSize}> Friend </Text>
                        </TouchableOpacity>
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
        // marginTop: 20,
        // backgroundColor: 'yellow',
    },
    first: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'pink',
        alignItems: 'center',
        width: '100%'
    },
    second: {
        flex: 1,
        backgroundColor: '#87ceeb',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    third: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    fourth: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#87ceeb',
        alignItems: 'center',
        width: '100%'
    },

    firstSize: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        color: '#ffffff'
    },
    secondSize: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        color: '#ffffff'
    },

    thirdSize: {
        fontSize: 40,
        color: '#ffffff',
        fontWeight: 'bold',
        fontFamily: 'Cochin'
    },
    fourthSize: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        color: '#ffffff'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ffc0cb',
        padding: 20
    },

    button1: {
        alignItems: 'center',
        backgroundColor: '#87ceeb',
        padding: 20
    },
    button2: {
        alignItems: 'center',
        backgroundColor: '#87ceeb',
        padding: 20
    },
    button3: {
        alignItems: 'center',
        backgroundColor: 'pink',
        padding: 20
    }
   

    // ByeSize: {
    //     fontSize: 30,
    //     fontWeight: 'bold',
    //     fontFamily: 'arial',
    //     color: 'green'
    // },

   
});
