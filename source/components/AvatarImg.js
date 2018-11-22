import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  statusDot: {
    position: 'absolute',
    zIndex: 1,
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  titled: {
    fontSize: 17,
    color: '#474747',
  },
});

class AvatarImg extends Component {
  render() {
    const {
      imgSrc,
      imgSize,
      title,
      isOnline,
    } = this.props;

    const cicrleStyle = { width: imgSize, height: imgSize, borderRadius: imgSize / 2 };
    const imgStyle = [styles.image, cicrleStyle];
    const statusBackgroundColor = isOnline ? { backgroundColor: '#fe5068' } : { backgroundColor: '#BDBDBD' };
    const statusDotStyle = [
      styles.statusDot,
      statusBackgroundColor,
      { top: 10 * imgSize / 13, right: imgSize / 13 },
    ];

    return (
      <TouchableOpacity style={styles.container}>
        <View style={cicrleStyle}>
          <Image
            style={imgStyle}
            source={imgSrc}
            resizeMode="cover"
          />
          <View style={statusDotStyle} />
        </View>
        {
          title !== '' ? <Text style={styles.titled}>{title}</Text> : <View />
        }
      </TouchableOpacity>
    );
  }
}

AvatarImg.defaultProps = {
  // eslint-disable-next-line global-require
  imgSrc: require('../assets/images/AvatarImg.png'),
  imgSize: 78,
  title: 'User',
  isOnline: false,
};

export default AvatarImg;
