import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

import { Card } from 'react-native-elements';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import UserCard from '../components/UserCard';
import SwipeDeck from '../components/SwipeDeck';

import logoConfig from '../assets/iconConfig/logo.json';
import data from '../mocks/userData';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils';

const CustomIcon = createIconSetFromFontello(logoConfig);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  deckContainer: {
    flex: 7,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardContainer: {
    ...StyleSheet.absoluteFillObject,
    width: SCREEN_WIDTH,
    height: 4 * SCREEN_HEIGHT / 5,
    padding: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  bigButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  smallButton: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      const iconName = 'tinder';

      return (
        <CustomIcon
          name={iconName}
          size={30}
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
          deckStyle={styles.deckContainer}
          cardStyle={styles.cardContainer}
          renderCard={item => this.renderCard(item)}
          renderNoMoreCard={() => this.renderNoMoreCard()}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.smallButton}>
            <SimpleLineIcons name="reload" color="#FFB903" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigButton}>
            <FontAwesomeIcons name="close" color="#FD2C7A" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <AntDesignIcon name="star" color="#169AE4" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bigButton}>
            <AntDesignIcon name="heart" color="#14E29A" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <FontAwesomeIcons name="angle-double-up" color="#8049C7" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
