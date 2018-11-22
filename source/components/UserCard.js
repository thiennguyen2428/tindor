import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import { Card } from 'react-native-elements';

import { SHADOW_STYLE } from '../utils';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 0,
    padding: 0,
    margin: 0,
    borderRadius: 10,
    ...SHADOW_STYLE,
  },
  wrapperStyle: {
    flex: 1,
    alignSelf: 'stretch',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default class UserCard extends Component {
  render() {
    const { item } = this.props;

    return (
      <Card
        containerStyle={styles.cardContainer}
        wrapperStyle={styles.cardContainer}
      >
        <Image
          style={styles.image}
          source={item.image}
        />
      </Card>
    );
  }
}
