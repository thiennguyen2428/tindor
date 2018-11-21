import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Card } from 'react-native-elements';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import UserCard from '../components/UserCard';
import SwipeDeck from '../components/SwipeDeck';

import logoConfig from '../assets/iconConfig/logo.json';
import data from '../mocks/userData';

const Icon = createIconSetFromFontello(logoConfig);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

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

  renderCard = item => (
    <UserCard
      image={item.image}
    />
  );

  renderNoMoreCard = () => (
    <Card title="All Done!">
      <Text style={{ marginBottom: 10, alignSelf: 'center' }}>
        There is no more card(s) here
      </Text>
    </Card>
  );

  render() {
    return (
      <View style={styles.container}>
        <SwipeDeck
          data={data.user}
          renderCard={item => this.renderCard(item)}
          renderNoMoreCard={() => this.renderNoMoreCard()}
        />
      </View>
    );
  }
}
