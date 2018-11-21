import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      const iconName = 'account-circle';

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
        <Text>This is Profile Screen</Text>
      </View>
    );
  }
}
