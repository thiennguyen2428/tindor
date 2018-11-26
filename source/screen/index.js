import { StyleSheet } from 'react-native';
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Home from './Home';
import Profile from './Profile';
import Message from './Message';
import MessageComposer from './MessageComposer';

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

const TabNavigation = createMaterialTopTabNavigator({
  ProfileScreen: Profile,
  Home,
  MessageScreen: Message,
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
  lazy: true,
  animationEnabled: false,
});

const RootNavigation = createStackNavigator({
  TabNavigation: {
    screen: TabNavigation,
    navigationOptions: {
      header: null,
    },
  },
  MessageComposer,
}, {
  initialRouteName: 'TabNavigation',
});


export default RootNavigation;
