import {StyleSheet} from 'react-native';
import {sizes} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderImage: {
    width: '100%',
    height: (sizes.height / 3) * 1.9,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginBottom: 80,
  },
  caruselItem: {
    backgroundColor: '#E5E5E5',
  },
  paginationContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  paginationDots: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    marginHorizontal: 8,
  },
  handleIndicator: {
    backgroundColor: '#F2F3F5',
    borderRadius: 24,
    height: 4,
    width: 56,
    marginVertical: 20,
  },
  bottomSheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  bottomSheetTitle: {
    fontWeight: '700',
    fontSize: 24,
    color: '#1D2438',
    textAlign: 'left',
    marginBottom: 9,
  },
  bottomSheetDescription: {
    color: '#1D2438',
    marginTop: 8,
  },
  text: {
    fontWeight: '400',
    color: '#A0A0A0',
    textAlign: 'left',
  },
});
