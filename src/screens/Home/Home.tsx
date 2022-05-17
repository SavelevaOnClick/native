import React from 'react';
import {Text, TouchableOpacity, View} from '@components';
import {useNavigation, useCallback, useEffect} from '@hooks';
import styles from './styles';
import {Dispatch} from 'react';
import {ISetOrientation, TGlobalState} from '@types';
import {connect} from 'react-redux';
import Orientation, {orientation} from 'react-native-orientation';
import {setOrientation} from '../../reducers/global';

type THomeProps = {
  setOrientation: (data: ISetOrientation['data']) => void;
};

const Home: React.FC<THomeProps> = ({setOrientation}) => {
  const navigation = useNavigation();

  const setInitialOrientation = useCallback(
    (err: Error, orientation: orientation) => setOrientation(orientation),
    [],
  );

  useEffect(() => {
    Orientation.getOrientation(setInitialOrientation);
    Orientation.addOrientationListener(setOrientation);
    return () => Orientation.removeOrientationListener(setOrientation);
  }, []);

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
        <TouchableOpacity onPress={onPress('VideoPlayer')}>
          <Text style={styles.link}>Video Player</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapDispatchToProps = (dispatch: Dispatch<ISetOrientation>) => ({
  setOrientation: (data: ISetOrientation['data']) =>
    dispatch(setOrientation(data)),
});

export default connect(null, mapDispatchToProps)(Home);
