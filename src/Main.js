import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Linking } from 'react-native';

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Main screen</Text>
                <View style={styles.innerContainer}>
                    <View style={styles.MainContainer}>
                        <Button 
                            title='Click Here To Open Website URL' 
                            onPress={() => Linking.openURL('https://github.com/aidansoffe')}
                        />
                    </View>
                    <Image
                        source={require('../components/images/emoji.jpeg')}
                        style={{ width: 190, height: 190, marginTop: 45 }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87ceeb',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    text: {
        fontSize: 35,
        color: '#ffffff'
    },
    innerContainer: {
        flex: 1,
        fontSize: 50,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }

});


