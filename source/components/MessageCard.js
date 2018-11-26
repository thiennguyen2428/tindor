import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import AvatarImg from './AvatarImg';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  messageBlock: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleMessage: {
    fontSize: 21,
    color: '#474747',
    fontWeight: 'bold',
  },
  lastestMessage: {
    fontSize: 17,
    color: '#7C7C7C',
  },
});

class MessageCard extends Component {
  render() {
    const {
      avatarSize,
      avatarSrc,
      isOnline,
      unread,
      titleMessage,
      lastestMessage,
      onPress,
    } = this.props;

    const unreadMessageStyle = unread ? { fontWeight: 'bold' } : {};

    return (
      <TouchableOpacity
        onPress={() => onPress()}
      >
        <View style={styles.container}>
          <AvatarImg
            imgSrc={avatarSrc}
            title=""
            size={avatarSize}
            isOnline={isOnline}
          />
          <View style={styles.messageBlock}>
            <Text style={styles.titleMessage}>{titleMessage}</Text>
            <Text style={[styles.lastestMessage, unreadMessageStyle]}>{lastestMessage}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

MessageCard.defaultProps = {
  avatarSize: 78,
  // eslint-disable-next-line global-require
  avatarSrc: require('../assets/images/AvatarImg.png'),
  isOnline: false,
  titleMessage: 'User 1',
  unread: false,
  lastestMessage: 'New Message Here',
};

export default MessageCard;
