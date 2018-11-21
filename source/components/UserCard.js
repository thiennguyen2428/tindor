import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { Card } from 'react-native-elements';

export default class UserCard extends Component {
  render() {
    const { image, children } = this.props;

    return (

      <Image
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: 'cover',
          borderRadius: 20,
        }}
        source={image}
      />
    );
  }
}
