import React from 'react';
import {Text, TouchableOpacity, View} from '@components';
import {useNavigation, useCallback} from '@hooks';
import styles from './styles';

type THomeProps = {};

const Home: React.FC<THomeProps> = () => {
  const navigation = useNavigation();
  const onPress = useCallback(
    routeName => () => navigation.navigate(routeName),
    [],
  );
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress('Commit')}>
          <Text style={styles.link}>Commit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress('Map')}>
          <Text style={styles.link}>Map</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress('SmartInvest')}>
          <Text style={styles.link}>Smart Invest</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress('Portray')}>
          <Text style={styles.link}>Portray</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPress('SignIn')}>
          <Text style={styles.link}>SignIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
