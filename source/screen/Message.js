import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MessageCard from '../components/MessageCard';
import AvatarImg from '../components/AvatarImg';

import mockData from '../mocks/userData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 5,
  },
  searchIcon: {
    paddingTop: 2,
    paddingRight: 5,
    color: '#fe5068',
  },
  searchBox: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    borderColor: '#fe5068',
    borderBottomWidth: 1,
    fontSize: 15,
    lineHeight: 20,
  },
  blockTitle: {
    fontSize: 16,
    color: '#fe5068',
    paddingVertical: 10,
  },
  blockMatches: {
    height: 100,
  },
  blockMessage: {
    flex: 1,
  },
});

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
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={25} style={styles.searchIcon} />
          <TextInput
            style={styles.searchBox}
            placeholder="Search 1 match"
            underlineColorAndroid="transparent"
          />
        </View>
        <Text style={styles.blockTitle}>New Matches</Text>
        <View style={styles.blockMatches}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={mockData.newMatches}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <AvatarImg
                size={78}
                imgSrc={item.image}
                isOnline={item.isOnline}
                title={item.name}
              />
            )}
          />
        </View>
        <Text style={styles.blockTitle}>Messages</Text>
        <View style={styles.blockMessage}>
          <FlatList
            data={mockData.messages}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MessageCard
                avatarSrc={item.image}
                isOnline={item.isOnline}
                unread={item.unread}
                titleMessage={item.name}
                lastestMessage={item.lastestMessage}
              />
            )}
          />
        </View>
      </ScrollView>
    );
  }
}
