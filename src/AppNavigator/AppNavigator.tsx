import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CommMit, Home, Map, SmartInvest} from '@screens';

const RootStack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Commit" component={CommMit} />
        <RootStack.Screen name="Map" component={Map} />
        <RootStack.Screen name="SmartInvest" component={SmartInvest} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
