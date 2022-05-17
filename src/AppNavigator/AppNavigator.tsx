import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  CommMit,
  Home,
  Map,
  Portray,
  SignIn,
  SmartInvest,
  VideoPlayer,
} from '@screens';
const RootStack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Commit" component={CommMit} />
        <RootStack.Screen name="Map" component={Map} />
        <RootStack.Screen name="SmartInvest" component={SmartInvest} />
        <RootStack.Screen name="Portray" component={Portray} />
        <RootStack.Screen name="SignIn" component={SignIn} />
        <RootStack.Screen name="VideoPlayer" component={VideoPlayer} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
