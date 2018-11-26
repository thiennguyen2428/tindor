import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Icon from '../components/VectorIcon';
import AvatarImg from '../components/AvatarImg';

import data from '../mocks/userData';
import { SCREEN_WIDTH, SHADOW_STYLE } from '../utils';

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
  bannerWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerTitleWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: '#474747',
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
    tabBarIcon: ({ focused }) => (
      <Icon
        type="MaterialIcons"
        name="account-circle"
        size={30}
        style={focused ? { color: '#fe5068' } : { color: '#dadfe6' }}
      />
    ),
  }

  constructor(props) {
    super(props);

    this.state = {
      carouselPageIndex: 0,
    };
  }


  renderCarouselItem = (item) => {
    const {
      iconType,
      iconName,
      size,
      color,
      title,
      subtitle,
      id,
    } = item;

    return (
      <View style={styles.bannerWrapper} hey={id}>
        <View style={styles.bannerTitleWrapper}>
          <Icon type={iconType} name={iconName} size={size} color={color} />
          <Text style={styles.bannerTitle}>{title}</Text>
        </View>
        {
          subtitle
            ? <Text style={styles.userButtonTitle}>{subtitle}</Text>
            : <View />
        }
      </View>
    );
  }

  renderCarouselPaging = () => {
    const { carouselPageIndex } = this.state;

    return (
      <Pagination
        dotsLength={data.tindorPlusAds.length}
        activeDotIndex={carouselPageIndex}
      />
    );
  }

  render() {
    const { user } = data;
    const { carouselPageIndex } = this.state;
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
                <Icon type="MaterialIcons" size={30} name="settings" color="#DADFE6" />
              </TouchableOpacity>
              <Text style={styles.userButtonTitle}>Settings</Text>
            </View>
            <View style={styles.userButtonWrapper}>
              <TouchableOpacity style={styles.userButton}>
                <Icon type="MaterialIcons" size={30} name="mode-edit" color="#DADFE6" />
              </TouchableOpacity>
              <Text style={styles.userButtonTitle}>Edit</Text>
            </View>
          </View>
        </View>
        <View style={styles.tindorPlusArea}>
          <View style={{ flex: 2 }}>
            <Carousel
              style={{ flex: 1 }}
              autoplayDelay={300}
              autoplayInterval={2000}
              data={data.tindorPlusAds}
              renderItem={({ item }) => this.renderCarouselItem(item)}
              onBeforeSnapToItem={index => this.setState({ carouselPageIndex: index })}
              sliderWidth={SCREEN_WIDTH}
              itemWidth={SCREEN_WIDTH}
              loopClonesPerSide={data.tindorPlusAds.length}
              autoplay
              loop
            />
            {this.renderCarouselPaging()}
          </View>
          <View style={styles.tindorPlusButtonWrapper}>
            <TouchableOpacity style={styles.tindorPlusButton}>
              {
                carouselPageIndex === 0
                  ? <Text style={[styles.tindorPlusTitle, { color: '#FFB903' }]}>Get Tinder Gold</Text>
                  : <Text style={styles.tindorPlusTitle}>My Tinder Plus</Text>
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
