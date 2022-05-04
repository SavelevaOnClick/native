import React from 'react';
import Mr from 'react-native-map-clustering';
import {TouchableOpacity} from '@components';
import MapView, {Marker, Region} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {View, Text} from 'react-native';
import {assets} from '@assets';
import styles from './styles';
import {useEffect, useCallback, useState, useRef} from '@hooks';
import {PermissionsAndroid} from 'react-native';

const marcersData = [
  {
    coordinate: {
      latitude: 49.9874554248223,
      longitude: 36.230742504841714,
    },
    title: 'ArtJoker',
    image: assets.img.MARCER,
  },
  {
    coordinate: {
      latitude: 49.988352177527304,
      longitude: 36.233253052277455,
    },
    title: 'Палладиум',
    image: assets.img.MARCER,
  },
  {
    coordinate: {
      latitude: 49.9863642237152,
      longitude: 36.23391868317541,
    },
    title: 'Музей кофе',
    image: assets.img.MARCER,
  },
  {
    coordinate: {
      latitude: 49.989990013978904,
      longitude: 36.230560818174,
    },
    title: 'Успенский собор',
    image: assets.img.MARCER,
  },
  {
    coordinate: {
      latitude: 49.98634183116782,
      longitude: 36.235199633474686,
    },
    title: 'Антикафе Уровень',
    image: assets.img.MARCER,
  },
  {
    coordinate: {
      latitude: 49.98784521070106,
      longitude: 36.23391954921363,
    },
    title: 'На Костюринском',
    image: assets.img.MARCER,
  },
  {
    coordinate: {
      latitude: 49.98892261664709,
      longitude: 49.98892261664709,
    },
    title: 'OKwine',
    image: assets.img.MARCER,
  },
];
const initialRegion = {
  latitude: 49.9874554248223,
  longitude: 36.230742504841714,
  latitudeDelta: 0.04,
  longitudeDelta: 0.05,
};
const duration = 2000;

type TMapProps = {};
const Map: React.FC<TMapProps> = () => {
  const [geolocation, setGeolocation] = useState<Region | null>(null);
  const mapRef = useRef<MapView>(null);

  const getPermissions = useCallback(async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Разрешите доступ к геоданным',
          message:
            'Если не разрешить приложению доступ к вашим геоданным, функционал будет доступен не в полном объёме',
          buttonNeutral: 'Позже',
          buttonNegative: 'Отмена',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.warn(e);
    }
  }, []);

  useEffect(() => {
    getPermissions().then(resp => {
      resp &&
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            setGeolocation({
              latitude: Number(latitude),
              longitude: Number(longitude),
            });
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
    });
  }, []);

  const onPress = useCallback(() => {
    getPermissions()
      .then(
        resp =>
          resp &&
          Geolocation.getCurrentPosition(
            position => {
              const {latitude, longitude} = position.coords;
              setGeolocation({
                latitude: Number(latitude),
                longitude: Number(longitude),
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
              });
            },
            error => {
              console.log(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          ),
      )
      .then(() => {
        mapRef.current &&
          geolocation &&
          mapRef.current.animateToRegion(geolocation, duration);
      });
  }, [geolocation]);

  return (
    <View style={styles.container}>
      <Mr
        minZoomLevel={17}
        ref={mapRef}
        style={styles.map}
        initialRegion={initialRegion}>
        {marcersData.map(marcer => (
          <Marker
            coordinate={marcer.coordinate}
            title={marcer.title}
            image={assets.img.MARCER}
            key={marcer.title}>
            <View>
              <Text style={styles.marcerTitle}>{marcer.title}</Text>
            </View>
          </Marker>
        ))}
      </Mr>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>Геоданные</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Map;
