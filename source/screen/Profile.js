import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';

import AvatarImg from '../components/AvatarImg';

import data from '../mocks/userData';
import { SHADOW_STYLE } from '../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  userArea: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  userButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  userButtonWrapper: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userButton: {
    backgroundColor: '#FCFDFE',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#F4F6FA',
    marginVertical: 5,
    ...SHADOW_STYLE,
  },
  userButtonTitle: {
    fontSize: 17,
    color: '#474747',
  },
  tindorPlusArea: {
    flex: 2.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tindorPlusButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tindorPlusButton: {
    backgroundColor: '#FFFFFF',
    height: 60,
    width: 240,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    ...SHADOW_STYLE,
  },
  tindorPlusTitle: {
    fontSize: 20,
    color: '#FD2C7A',
  },
});

export default class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      const iconName = 'account-circle';

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
    const { user } = data;
    const imgTitle = `${data.user.name}, ${data.user.age}`;

    return (
      <View style={styles.container}>
        <View style={styles.userArea}>
          <AvatarImg
            imgSize={120}
            imgSrc={user.image}
            title={imgTitle}
            isOnline
          />
          <View style={styles.userButtonGroup}>
            <View style={[styles.userButtonWrapper, { borderRightWidth: 1, borderColor: '#DADFE6' }]}>
              <TouchableOpacity style={styles.userButton}>
                <Icon size={30} name="settings" color="#DADFE6" />
              </TouchableOpacity>
              <Text style={styles.userButtonTitle}>Settings</Text>
            </View>
            <View style={styles.userButtonWrapper}>
              <TouchableOpacity style={styles.userButton}>
                <MaterialIcon size={30} name="mode-edit" color="#DADFE6" />
              </TouchableOpacity>
              <Text style={styles.userButtonTitle}>Edit</Text>
            </View>
          </View>
        </View>
        <View style={styles.tindorPlusArea}>
          <View style={{ flex: 2 }}>
            <IndicatorViewPager
              autoPlayEnable
              style={{ flex: 1 }}
              autoPlayInterval={1000}
              indicator={<PagerDotIndicator pageCount={3} />}
            >
              <View style={{ backgroundColor: 'cadetblue' }}>
                <Text>page one</Text>
              </View>
              <View style={{ backgroundColor: 'cornflowerblue' }}>
                <Text>page two</Text>
              </View>
              <View style={{ backgroundColor: '#1AA094' }}>
                <Text>page three</Text>
              </View>
            </IndicatorViewPager>
          </View>
          <View style={styles.tindorPlusButtonWrapper}>
            <TouchableOpacity style={styles.tindorPlusButton}>
              <Text style={styles.tindorPlusTitle}>Your Tinder Plus</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
