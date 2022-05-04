import {assets} from '@assets';
import {Icon} from '@components';
import {sizes} from '@constants';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useMemo, useCallback} from '@hooks';
import {
  Animated,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

type TAnimatedHeaderProps = {
  scrollY: Animated.Value;
};

const AnimatedHeader: React.FC<TAnimatedHeaderProps> = ({scrollY}) => {
  const navigation = useNavigation();

  const HEADER_MAX_HEIGHT = sizes.height / 3;
  const HEADER_MIN_HEIGHT = 96;
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const headerTranslateYAnimate = useMemo(
    () =>
      scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -HEADER_SCROLL_DISTANCE],
        extrapolate: 'clamp',
      }),
    [scrollY],
  );

  const imageOnBlureAnimate = useMemo(
    () =>
      scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    [],
  );

  const textAnimate = useMemo(
    () =>
      scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 72],
        extrapolate: 'clamp',
      }),
    [],
  );
  const toolBarAnimate = useMemo(
    () =>
      scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, HEADER_SCROLL_DISTANCE - 12],
        extrapolate: 'clamp',
      }),
    [],
  );
  const imageAnimate = useMemo(
    () =>
      scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, HEADER_SCROLL_DISTANCE / 2],
        extrapolate: 'clamp',
      }),
    [],
  );

  const onPressExit = useCallback(() => navigation.goBack(), []);

  return (
    <Animated.View
      style={[
        styles.container,
        {transform: [{translateY: headerTranslateYAnimate}]},
      ]}>
      <Animated.Image
        source={assets.img.HEADER_BACKGROUND}
        style={[
          styles.mainHeaderImage,
          {transform: [{translateY: imageAnimate}]},
        ]}
        blurRadius={Platform.OS === 'android' ? 0 : imageOnBlureAnimate}
      />
      <View style={styles.headerContent}>
        <Animated.View
          style={[styles.toolBar, {transform: [{translateY: toolBarAnimate}]}]}>
          <Image
            source={assets.img.HEADER_ICON}
            style={styles.toolBarLogoIcon}
          />
          <TouchableOpacity onPress={onPressExit}>
            <Icon name="Close" size={24} color={'#fff'} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{transform: [{translateX: textAnimate}]}}>
          <Text style={styles.title}>Київстар</Text>
          <Text style={styles.description}>Лідер мобільного зв’язку</Text>
        </Animated.View>
      </View>
      <View style={styles.darkTheme}></View>
    </Animated.View>
  );
};

export default AnimatedHeader;
