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
                <Text style={{ fontSize: 35, color: '#ffffff'}}> Main screen </Text>
                <View style={{
                    flex: 1,
                    fontSize: 50,
                    backgroundColor: 'pink',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    {/* <TouchableOpacity
                    style={styles.button}
                        onPress={() => this.props.navigation.navigate('Profile')}
                    >
                        <Text style={{fontSize: 35, color: '#ffffff'}}> Click </Text>
                    </TouchableOpacity> */}
                    <Image
            source={require('../components/images/emoji.jpeg')}
            style={{width: 190, height: 190, marginTop: 45}}
          />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{

    },
    // button: {
    //     alignItems: 'center',
    //     backgroundColor: '#87ceeb',
    //     padding: 20
    // }
});


