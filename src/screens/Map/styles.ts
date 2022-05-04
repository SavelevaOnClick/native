import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  title: {
    color: 'red',
    fontSize: 22,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marcerTitle: {
    marginLeft: 30,
    paddingTop: 10,
  },
  button: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 100,
    height: 50,
    borderWidth: 2,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    borderColor: '#9B9F9A99',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        translateX: -100 / 2,
      },
      {
        translateY: -100 / 2,
      },
      {
        rotate: '90deg',
      },
      {
        translateY: -50 / 2,
      },
      {
        translateX: 150 / 2,
      },
    ],
  },
});
