import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import Home from './Home';
import Profile from './Profile';
import Messenge from './Message';

import { TAB_BAR_HEIGHT } from '../utils';

const styles = StyleSheet.create({
  tabBar: {
    height: TAB_BAR_HEIGHT,
    backgroundColor: 'white',
  },
  icon: {
    width: 40,
  },
  indicator: {
    backgroundColor: 'transparent',
  },
});

const RootNavigator = createMaterialTopTabNavigator({
  ProfileScreen: Profile,
  Home,
  MessageScreen: Messenge,
}, {
  initialRouteName: 'Home',
  lazy: true,
  tabBarOptions: {
    style: styles.tabBar,
    indicatorStyle: styles.indicator,
    iconStyle: styles.icon,
    showLabel: false,
    showIcon: true,
  },
  swipeEnabled: false,
  animationEnabled: false,
});

export default RootNavigator;
