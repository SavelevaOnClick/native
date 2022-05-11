import {assets} from '@assets';
import {sizes} from '@constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  calendar: {
    marginBottom: 16,
  },
  defaultDateCell: {
    width: (sizes.width - 32) / 7,
    height: (sizes.width - 32) / 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 0,
    borderWidth: 0,
    overflow: 'hidden',
  },
  selectedDateCell: {},
  betweenDateCell: {
    backgroundColor: '#F7EBFF',
    borderRadius: 0,
  },
  rightBetweenDateCell: {
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  leftBetweenDateCell: {
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  currentDateCell: {
    borderColor: '#000',
    borderWidth: 1,
    zIndex: 20,
  },
  gradientCell: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    zIndex: 10,
  },
  textDateCell: {
    zIndex: 20,
  },
  headerCalendar: {
    borderBottomColor: '#BDC5D2',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  headerCalendarContent: {
    alignItems: 'center',
  },
  headerMonth: {
    fontFamily: assets.fonts.Inter_Bold,
    fontSize: 17,
  },
  headerYear: {},
  arrowRightStyle: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF1F8',
    borderRadius: 8,
    marginRight: -20,
  },
  arrowLeftStyle: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF1F8',
    borderRadius: 8,
    marginLeft: -20,
  },
});
