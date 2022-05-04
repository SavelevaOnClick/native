import React from 'react';
import {Text, TouchableOpacity, View} from '@components';
import {
  NavigationHelpersContext,
  useNavigation,
} from '@react-navigation/native';

type THomeProps = {};

const Home: React.FC<THomeProps> = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, padding: 24}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Commit')}>
          <Text>Commit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Map')}>
          <Text>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SmartInvest')}>
          <Text>Smart Invest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
