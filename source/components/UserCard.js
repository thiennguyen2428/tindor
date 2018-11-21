import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
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
    const { image } = this.props;

    return (
      <Image
        style={styles.image}
        source={image}
      />
    );
  }
}
