import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      const iconName = 'chat';

      return (
        <Icon
          name={iconName}
          size={30}
          style={focused ? { color: '#fe5068' } : { color: '#dadfe6' }}
        />
      );
    },
  }

  render() {
    return (
      <View>
        <Text>This is Message Screen</Text>
      </View>
    );
  }
}
