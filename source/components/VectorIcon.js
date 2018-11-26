import React, { Component } from 'react';

import { createIconSetFromFontello } from 'react-native-vector-icons'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import logoConfig from '../assets/iconConfig/logo.json';

const CustomIcon = createIconSetFromFontello(logoConfig);

export default class VectorIcon extends Component {
  render() {
    const { type, ...otherProps } = this.props;
    const VectorIcons = {
      CustomIcon,
      MaterialIcons,
      EvilIcons,
      Entypo,
      FontAwesome,
      Foundation,
      Ionicons,
      MaterialCommunityIcons,
      Zocial,
      Octicons,
      SimpleLineIcons,
      AntDesign,
    };
    const Icon = VectorIcons[type] || MaterialIcons;

    return (
      <Icon {...otherProps} />
    );
  }
}
