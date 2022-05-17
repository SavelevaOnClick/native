import {
  Icon,
  View,
  TouchableOpacity,
  Video,
  ActivityIndicator,
  Slider,
} from '@components';
import React from 'react';
import {OnLoadData, OnProgressData, TGlobalState} from '@types';
import {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useDebounce,
  useRef,
} from '@hooks';

import {sizes} from '@constants';
import styles from './styles';
import {connect} from 'react-redux';

type TVideoPlayerProps = {
  orientation: TGlobalState['global']['orientation'];
};

const url = 'https://media.w3.org/2010/05/sintel/trailer.mp4';

const VideoPlayer: React.FC<TVideoPlayerProps> = ({orientation}) => {
  const [isLoading, setIsLoadingStart] = useState<boolean>(true);
  const [isPause, setIsPause] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [showToolBar, setShowToolBar] = useState<boolean>(true);
  const [duration, setDuration] = useState<number>();
  const [current, setCurrent] = useState<number>(0);
  const debaunce = useDebounce(isPause, 3000, isMuted);
  const refPlayer = useRef<Video | null>();
  const onPressPause = useCallback(
    () => setIsPause(prevValue => !prevValue),
    [],
  );

  const onPressMuted = useCallback(
    () => setIsMuted(prevValue => !prevValue),
    [],
  );

  const styleVideo = useMemo(
    () =>
      !isFullScreen
        ? {padding: 0, margin: 0, width: sizes.width, height: sizes.height / 3}
        : {
            width: orientation === 'PORTRAIT' ? sizes.width : sizes.height,
            height: orientation === 'PORTRAIT' ? sizes.height : sizes.width,
          },
    [isFullScreen, orientation],
  );

  useEffect(() => {
    if (isFullScreen) {
      setShowToolBar(false);
    }
  }, [debaunce.debounceValue, debaunce.debounceValue2, isFullScreen]);

  const setFullScreen = useCallback(() => {
    setIsFullScreen(prevValue => !prevValue);
  }, []);

  const containerVideoplyerStyle = useMemo(
    () =>
      !isFullScreen
        ? styles.containerVideoPlayer
        : styles.containerVideoPlayerFullScreen,
    [isFullScreen],
  );

  const onPressVideo = useCallback(() => {
    onPressPause();
    isFullScreen && setShowToolBar(true);
  }, [isFullScreen]);

  const onLoad = useCallback((data: OnLoadData) => {
    setDuration(data.duration);
  }, []);

  const onProgress = useCallback(
    (data: OnProgressData) => setCurrent(data.currentTime),
    [],
  );

  const onEndPlay = useCallback(() => {
    setIsPause(true);
    setCurrent(0);
    refPlayer.current && refPlayer.current.seek(0);
  }, []);

  const onValueSliderChange = useCallback((value: number | number[]) => {
    refPlayer.current && refPlayer.current.seek(Number(value));
  }, []);

  const ref = useCallback((ref: Video) => {
    refPlayer.current = ref;
  }, []);

  const bufferConfig = useMemo(
    () => ({
      minBufferMs: 15000,
      maxBufferMs: 50000,
      bufferForPlaybackMs: 2500,
      bufferForPlaybackAfterRebufferMs: 5000,
    }),
    [],
  );

  const onReadyForDisplay = useCallback(() => setIsLoadingStart(false), []);

  return (
    <View style={containerVideoplyerStyle}>
      {isLoading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator color="#fff" size="small" />
        </View>
      ) : null}
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressVideo} activeOpacity={0.9}>
          <Video
            source={{
              uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0',
              type: 'mpd',
            }}
            ref={ref}
            onReadyForDisplay={onReadyForDisplay}
            bufferConfig={bufferConfig}
            onLoad={onLoad}
            onProgress={onProgress}
            resizeMode={!isFullScreen ? 'cover' : 'contain'}
            style={styleVideo}
            fullscreen={true}
            paused={isPause}
            muted={isMuted}
            controls={false}
            onEnd={onEndPlay}
          />
        </TouchableOpacity>
        {showToolBar ? (
          <View style={styles.toolBar}>
            <Slider
              maximumValue={duration}
              step={1}
              thumbTintColor="#fff"
              onValueChange={onValueSliderChange}
              value={current}
              trackStyle={styles.track}
              thumbStyle={styles.thumb}
              containerStyle={styles.containerSlider}
            />
            <View style={styles.bottomToolBar}>
              <TouchableOpacity onPress={onPressPause}>
                <Icon
                  name={isPause ? 'play3' : 'pause2'}
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressMuted}>
                <Icon
                  name={isMuted ? 'volume-mute2' : 'volume-medium'}
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={setFullScreen}>
                <Icon
                  name={isFullScreen ? 'shrink' : 'enlarge'}
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const mapStateToProps = (state: TGlobalState) => ({
  orientation: state.global.orientation,
});
export default connect(mapStateToProps, null)(VideoPlayer);
