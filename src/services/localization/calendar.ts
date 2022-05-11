import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['init'] = {
  monthNames: [],
  monthNamesShort: [],
  dayNames: [],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  today: '',
};
LocaleConfig.defaultLocale = 'init';

export default LocaleConfig;
