import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  UIManager,
  LayoutAnimation,
} from 'react-native';

import { SCREEN_WIDTH } from '../utils';

const SWIPE_THRESHOLD = SCREEN_WIDTH / 2;
const SWIPE_OUT_DURATION = 375;

class SwipeDeck extends Component {
  constructor(props) {
    super(props);

    this.state = { deckIndex: 0 };
    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        Animated.spring(this.position, {
          toValue: { x: gesture.dx, y: gesture.dy },
        }).start();
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
          }).start();
        }
      },
    });
  }

  componentWillUpdate() {
    // eslint-disable-next-line no-unused-expressions
    UIManager.setLayoutAnimationEnabledExperimental
      && UIManager.setLayoutAnimationEnabledExperimental(true);

    LayoutAnimation.spring();
  }

  onSwipeComplete(direction) {
    const { onSwipeRight, onSwipeLeft, data } = this.props;
    const { deckIndex } = this.state;
    const item = data[deckIndex];

    if (direction === 'left') {
      onSwipeLeft(item);
    } else {
      onSwipeRight(item);
    }
    this.position.setValue({ x: 0, y: 0 });
    this.setState(prevState => ({ deckIndex: prevState.deckIndex + 1 }));
  }

  getCurrentCardStyle() {
    const { cardStyle } = this.props;
    const rotate = this.position.x.interpolate({
      inputRange: [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    });

    return [
      cardStyle,
      {
        ...this.position.getLayout(),
        zIndex: 1,
        transform: [{ rotate }],
      },
    ];
  }

  getNextCardStyle(index) {
    const { cardStyle } = this.props;
    const opacity = this.position.x.interpolate({
      inputRange: [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    });
    const scale = this.position.x.interpolate({
      inputRange: [-SWIPE_THRESHOLD, 0, SWIPE_THRESHOLD],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp',
    });

    return [
      cardStyle,
      {
        zIndex: index * -1,
        opacity,
        transform: [{ scale }],
      },
    ];
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
    }).start(() => this.onSwipeComplete(direction));
  }

  renderListCards() {
    const { data, renderCard, renderNoMoreCard } = this.props;
    const { deckIndex } = this.state;

    if (deckIndex >= data.length) {
      return renderNoMoreCard();
    }

    return data.map((item, index) => {
      if (index < deckIndex) {
        return null;
      }

      if (index === deckIndex) {
        return (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={this.getCurrentCardStyle()}
            key={item.id}
          >
            {renderCard(item)}
          </Animated.View>
        );
      }

      return (
        <Animated.View
          key={item.id}
          style={this.getNextCardStyle(index)}
        >
          {renderCard(item)}
        </Animated.View>
      );
    });
  }

  render() {
    const { deckStyle } = this.props;

    return (
      <View style={deckStyle}>
        {this.renderListCards()}
      </View>
    );
  }
}

SwipeDeck.defaultProps = {
  onSwipeRight: () => {},
  onSwipeLeft: () => {},
};

export default SwipeDeck;
