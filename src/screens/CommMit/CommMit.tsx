import React from 'react';
import {useCallback, useMemo, useRef, useState} from '@hooks';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Swipeable,
  ImageViewer,
  Icon,
} from '@components';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {assets} from '@assets';
import styles from './styles';
import {sizes} from '@constants';
import Modal from 'react-native-modal';

const carouselData = [
  {
    props: {
      source: assets.img.sliders.SLIDE1,
    },
    url: '',
    id: 1,
  },
  {
    props: {
      source: assets.img.sliders.SLIDE2,
    },
    id: 2,
    url: '',
  },
  {
    props: {
      source: assets.img.sliders.SLIDE3,
    },
    id: 3,
    url: '',
  },
  {
    props: {
      source: assets.img.sliders.SLIDE4,
    },
    id: 4,
    url: '',
  },
];
type TMainProps = {};

const CommMit: React.FC<TMainProps> = () => {
  const CarouselRef = useRef(null);
  const bottomSheetRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isActiveModal, setIsActiveModal] = useState<boolean>(false);

  const snapPoints = useMemo(() => ['38%', '60%'], []);

  const onPress = useCallback(() => setIsActiveModal(true), []);

  const RenderItem = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          style={styles.caruselItem}
          activeOpacity={0.9}
          onPress={onPress}>
          <Image source={item.props.source} style={styles.sliderImage} />
        </TouchableOpacity>
      );
    },
    [carouselData],
  );

  const renderLeftActions = useCallback(() => {
    return (
      <View
        style={{
          backgroundColor: 'green',
          height: 65,
          width: '100%',
          padding: 0,
          margin: 0,
        }}>
        <Text style={{color: 'red'}}>Right Block</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Carousel
          ref={CarouselRef}
          removeClippedSubviews={true}
          data={carouselData}
          renderItem={RenderItem}
          sliderWidth={sizes.width}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          itemWidth={sizes.width}
          sliderHeight={(sizes.height / 3) * 1.9}
          itemHeight={(sizes.height / 3) * 1.9}
          onSnapToItem={setActiveSlide}
        />
        <Pagination
          dotsLength={carouselData.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDots}
          dotColor="#FFF"
          inactiveDotColor="#F2F3F5"
          inactiveDotScale={1}
          inactiveDotOpacity={0.7}
          tappableDots={true}
          carouselRef={CarouselRef}
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        style={styles.container}
        snapPoints={snapPoints}
        detached={true}
        handleIndicatorStyle={styles.handleIndicator}
        backgroundStyle={styles.bottomSheet}>
        <BottomSheetScrollView style={styles.contentContainer}>
          <Text style={styles.bottomSheetTitle}>Зеркальная Струя</Text>
          <View>
            <Icon name="Close" size={24} color="grey" />
            <Text style={styles.text}>Харьков, ул Университетская, 3</Text>
          </View>
          <Text style={styles.text}>Про объект</Text>
          <Text style={styles.bottomSheetDescription}>
            Территория, расположенная северо-восточнее Сумской улицы, в XIX —
            начале XX века принадлежала университету. На ней размещались клиники
            и учебные корпуса. Территория, расположенная северо-восточнее
            Сумской улицы, в XIX — начале XX века принадлежала университету. На
            ней размещались клиники и учебные корпуса. ScrollView ерритория,
            расположенная северо-восточнее Сумской улицы, в XIX — начале XX века
            принадлежала университету. На ней размещались клиники и учебные
            корпуса. ScrollView
          </Text>
        </BottomSheetScrollView>
      </BottomSheet>
      <Swipeable
        renderRightActions={renderLeftActions}
        overshootRight={false}
        containerStyle={{
          backgroundColor: '#fff',
          position: 'absolute',
          height: 65,
          width: '100%',
          bottom: 0,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}>
        <View style={{backgroundColor: 'blue', width: '100%', height: '100%'}}>
          <Text>"hello"</Text>
        </View>
      </Swipeable>
      <Modal
        isVisible={isActiveModal}
        coverScreen={true}
        // animationOutTiming={0.8}
        style={{margin: 0, backgroundColor: '#000'}}>
        <ImageViewer
          style={{flex: 1}}
          imageUrls={carouselData}
          index={activeSlide}
          onCancel={() => setIsActiveModal(false)}
          enableSwipeDown={true}
          // resizeMode="containe"
          // useNativeDravier={true}
        />
      </Modal>
    </View>
  );
};

export default CommMit;
