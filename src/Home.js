import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.first}>
                    <Text style={styles.firstSize}>Welcome Hooman</Text>
                </View>

                <View style={styles.second}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Main')}
                    >
                        <Text style={styles.secondSize}>Click</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.third}>
                    <Text style={styles.thirdSize}>Here You Are</Text>
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
    firstSize: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
        color: '#ffffff'
    },
    secondSize: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20
    },

    thirdSize: {
        fontSize: 40,
        color: '#ffffff',
        fontWeight: 'bold',
        fontFamily: 'Cochin'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ffc0cb',
        padding: 20
    }
   

    // ByeSize: {
    //     fontSize: 30,
    //     fontWeight: 'bold',
    //     fontFamily: 'arial',
    //     color: 'green'
    // },

   
});
