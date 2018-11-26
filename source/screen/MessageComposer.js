import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class MessageComposer extends Component {
  static navigationOptions = {
    title: 'Information',
    headerRight: (<View />),
  }

  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    const { messages } = this.state;


    return (
      <GiftedChat
        messages={messages}
        onSend={text => this.onSend(text)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
