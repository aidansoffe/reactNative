import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class Main extends Component {
    render() {
        return (
            <View style={{
                flex:1,
                backgroundColor: 'yellow'
            }}>
                <Text> Main screen </Text>
                <View style={{
                    flex: 1,
                    backgroundColor: 'purple',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <TouchableOpacity
                        // style={}
                        onPress={() => this.props.navigation.navigate('Profile')}
                    >
                        <Text> Go to Profile </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}