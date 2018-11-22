import { Dimensions, Platform } from 'react-native';

// Constant
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const TAB_BAR_HEIGHT = 50;

// Style
export const SHADOW_STYLE = Platform.select({
  ios: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
  },
  android: {
    elevation: 5,
  },
});
