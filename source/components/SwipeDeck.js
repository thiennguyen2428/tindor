import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  StyleSheet,
  UIManager,
  LayoutAnimation,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = 4 * SCREEN_WIDTH / 10;
const SWIPE_OUT_DURATION = 375;

const styles = StyleSheet.create({
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    padding: 10,
    elevation: 4,
    height: SCREEN_HEIGHT - 120,
  },
});

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

  getCardStyle() {
    const { position } = this;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
    }).start(() => this.onSwipeComplete(direction));
  }

  renderCards() {
    const { data, renderCard, renderNoMoreCard } = this.props;
    const { deckIndex } = this.state;

    if (deckIndex >= data.length) {
      return renderNoMoreCard();
    }

    return data.map((item, index) => {
      if (deckIndex > index) {
        return null;
      }
      if (index === deckIndex) {
        return (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              this.getCardStyle(),
              styles.cardStyle,
              { zIndex: index * -1 },
            ]}
            key={item.id}
          >
            {renderCard(item)}
          </Animated.View>
        );
      }

      return (
        <Animated.View
          key={item.id}
          style={[
            styles.cardStyle,
            { zIndex: index * -1 },
          ]}
        >
          {renderCard(item)}
        </Animated.View>
      );
    });
  }

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

SwipeDeck.defaultProps = {
  onSwipeRight: () => {},
  onSwipeLeft: () => {},
};

export default SwipeDeck;
