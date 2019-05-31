import React, { Component } from 'react'
import { Image } from 'react-native';


export default class Bats extends Component {
    render() {
        return (
            <Image
            style={{width: 80, height: 80}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        );
    }
}
