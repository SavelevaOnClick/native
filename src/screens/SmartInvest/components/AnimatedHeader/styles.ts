import {assets} from '@assets';
import {sizes} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: '33%',
    width: sizes.width,
    overflow: 'hidden',
  },
  headerContent: {
    paddingTop: 32,
    paddingHorizontal: 16,
    zIndex: 20,
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  mainHeaderImage: {
    width: sizes.width,
    height: '100%',
    position: 'absolute',
    bottom: 0,
  },
  title: {
    fontFamily: assets.fonts.Inter_Bold,
    color: '#fff',
    fontSize: 24,
    padding: 0,
  },
  description: {
    fontFamily: assets.fonts.Inter_Bold,
    color: '#fff',
  },
  toolBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toolBarLogoIcon: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
  },
  darkTheme: {
    position: 'absolute',
    width: sizes.width,
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: '#6e6565',
    opacity: 0.6,
  },
});
