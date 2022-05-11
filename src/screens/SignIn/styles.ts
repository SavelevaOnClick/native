import {assets} from '@assets';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  link: {
    textDecorationColor: 'green',
    textDecorationLine: 'underline',
    textTransform: 'lowercase',
    color: 'blue',
    fontFamily: assets.fonts.Inter_Bold,
  },
  avatar: {
    width: 70,
    height: 70,
    marginRight: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  descriptionContainer: {
    flex: 1,
  },
  textAlign: {
    textAlign: 'right',
  },
});
