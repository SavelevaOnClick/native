import {orientation} from 'react-native-orientation';

export type TGlobalState = {
  global: {
    orientation: orientation | null;
  };
};
