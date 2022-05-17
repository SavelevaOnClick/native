import {TGlobalState} from '@types';
import {orientation} from 'react-native-orientation';

type TGlobal = TGlobalState['global'];

export interface IGlobalActions {
  SET_ORIENTATION: string;
}

export interface ISetOrientation {
  type: IGlobalActions['SET_ORIENTATION'];
  data: orientation;
}

export type TGlobalActions = ISetOrientation;
