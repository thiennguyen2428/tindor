import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import logoConfig from '../assets/iconConfig/logo.json';

const Icon = createIconSetFromFontello(logoConfig);

export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      const iconName = 'tinder';

      return (
        <Icon
          name={iconName}
          size={25}
          style={focused ? { color: '#fe5068' } : { color: '#dadfe6' }}
        />
      );
    },
  }

  render() {
    return (
      <View>
        <Text>This is Home Screen</Text>
      </View>
    );
  }
}
