import {assets} from '@assets';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  link: {
    textDecorationColor: 'green',
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
    color: '#000',
    fontFamily: assets.fonts.Inter_Bold,
  },
});
