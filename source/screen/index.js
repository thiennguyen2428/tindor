import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import Home from './Home';
import Profile from './Profile';
import Messenge from './Message';

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
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
  tabBarOptions: {
    style: styles.tabBar,
    indicatorStyle: styles.indicator,
    iconStyle: styles.icon,
    showLabel: false,
    showIcon: true,
  },
  swipeEnabled: false,
});

export default RootNavigator;
