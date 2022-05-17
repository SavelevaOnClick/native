import React from 'react';
import AppNavigator from './AppNavigator/AppNavigator';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import {useEffect} from 'react';
import {useState} from 'react';
import {Dispatch} from 'react';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'PointPropType will be removed',
  'EdgeInsetsPropType will be removed',
]);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
