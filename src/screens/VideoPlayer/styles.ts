import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerVideoPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicatorContainer: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 30,
  },
  containerVideoPlayerFullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  toolBar: {
    position: 'absolute',
    zIndex: 30,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    paddingBottom: 5,
  },
  bottomToolBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerSlider: {
    height: 20,
  },
  track: {
    backgroundColor: '#fff',
    height: 5,
    width: '100%',
  },
  thumb: {
    height: 12,
    width: 30,
    borderRadius: 0,
  },
});
