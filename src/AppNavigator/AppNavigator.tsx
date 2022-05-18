import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Dispatch} from 'react';
import {
  CommMit,
  Home,
  Map,
  Portray,
  SignIn,
  SmartInvest,
  VideoPlayer,
} from '@screens';
import {ISetOrientation} from '@types';
import {setOrientation} from '../reducers/global';
import {connect} from 'react-redux';
import {useOrientation, useEffect} from '@hooks';

const RootStack = createStackNavigator();

type TAppNavigationProps = {
  setOrientation: (data: ISetOrientation['data']) => void;
};

const AppNavigator: React.FC<TAppNavigationProps> = ({setOrientation}) => {
  const orientation = useOrientation();

  useEffect(() => {
    orientation && setOrientation(orientation);
  }, [orientation]);

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
const mapDispatchToProps = (dispatch: Dispatch<ISetOrientation>) => ({
  setOrientation: (data: ISetOrientation['data']) =>
    dispatch(setOrientation(data)),
});
export default connect(null, mapDispatchToProps)(AppNavigator);
