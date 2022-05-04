import React from 'react';
import AppNavigator from './AppNavigator/AppNavigator';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'PointPropType will be removed',
  'EdgeInsetsPropType will be removed',
]);

const App = () => {
  return <AppNavigator />;
};

export default App;
