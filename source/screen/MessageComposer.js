import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import AvatarImg from '../components/AvatarImg';
import VectorIcon from '../components/VectorIcon';
import MockData from '../mocks/userData';

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStatus: {
    fontSize: 13,
    fontStyle: 'italic',
  },
});

export default class MessageComposer extends Component {
  static navigationOptions = ({ navigation }) => {
    const data = navigation.getParam('data', {});

    return {
      headerTitle: (
        <View style={styles.headerTitle}>
          <AvatarImg
            hideStatusDot
            imgSrc={data.image}
            title=""
            imgSize={40}
          />
          <View style={styles.titleWrapper}>
            <Text style={styles.textTitle}>{data.name}</Text>
            {data.isOnline ? <Text style={styles.textStatus}>Online</Text> : <View />}
          </View>
        </View>
      ),
      headerRight: (
        <TouchableOpacity>
          <VectorIcon
            type="MaterialCommunityIcons"
            name="dots-vertical"
            size={25}
            color="#fe5068"
          />
        </TouchableOpacity>
      ),
      headerTintColor: '#fe5068',
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', {});
    const { lastestMessage } = data;

    if (lastestMessage) {
      this.setState({
        messages: [
          {
            _id: '1',
            text: lastestMessage,
            createdAt: new Date(),
            user: {
              _id: data.id,
              name: data.name,
              avatar: data.image,
            },
          },
        ],
      });
    }
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    const { messages } = this.state;
    // const { navigation } = this.props;
    // const data = navigation.getParam('data', {});

    return (
      <GiftedChat
        messages={messages}
        onSend={text => this.onSend(text)}
        user={{
          _id: MockData.user.id,
          name: MockData.user.name,
          avatar: MockData.user.image,
        }}
      />
    );
  }
}
