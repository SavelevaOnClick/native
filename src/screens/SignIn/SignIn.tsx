import {
  GoogleSignin,
  GoogleSigninButton,
  Image,
  statusCodes,
  Text,
  TouchableOpacity,
  View,
} from '@components';
import React from 'react';
import {useState, useEffect, useMemo} from '@hooks';
import {assets} from '@assets';
import {NativeModuleError, User} from '@types';
import styles from './styles';

type TSignInProps = {};

const SignIn: React.FC<TSignInProps> = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [error, setError] = useState<NativeModuleError | null | string>(null);

  useEffect(() => {
    GoogleSignin.configure();
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUserInfo(userInfo);
    } catch (error) {
      const typedError = error as NativeModuleError;
      console.log(typedError);
      const errorMessage =
        typedError.code === statusCodes.SIGN_IN_REQUIRED
          ? 'User not signed it yet, please sign in :)'
          : typedError.message;
      setError(errorMessage);
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUserInfo(null);
    } catch (error) {
      const typedError = error as NativeModuleError;
      setError(typedError);
    }
  };
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
    } catch (error) {
      const typedError = error as NativeModuleError;
      if (typedError.code === statusCodes.SIGN_IN_CANCELLED) {
        setError('user cancelled the login flow');
      } else if (typedError.code === statusCodes.IN_PROGRESS) {
        setError('operation (e.g. sign in) is in progress already');
      } else if (typedError.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        setError('play services not available or outdated');
      } else {
        setError('some other error happened');
      }
    }
  };

  const avatar = useMemo(
    () =>
      !userInfo?.user?.photo
        ? assets.img.DEFAUT_AVATAR
        : {uri: userInfo.user.photo},
    [userInfo],
  );

  return (
    <View style={styles.container}>
      {userInfo ? (
        <View>
          <Text>Welcome {userInfo.user.name}</Text>
          <View style={styles.infoContainer}>
            <Image style={styles.avatar} source={avatar} />
            <View style={styles.descriptionContainer}>
              <Text>Your email: </Text>
              <Text style={styles.textAlign}>{userInfo.user.email}</Text>
              <Text>Your nik: </Text>
              <Text style={styles.textAlign}>{userInfo.user.givenName}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.link}>Log out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
          {error ? <Text>{error}</Text> : null}
        </View>
      )}
    </View>
  );
};

export default SignIn;
