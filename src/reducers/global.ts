import {ISetOrientation, TGlobalActions, TGlobalState} from '@types';

const initialState: TGlobalState['global'] = {
  orientation: null,
};

const SET_ORIENTATION = '[global] SET_ORIENTATION';

export default (state = initialState, action: TGlobalActions) => {
  switch (action.type) {
    case SET_ORIENTATION:
      return Object.assign({}, {...state, orientation: action.data});
    default:
      return state;
  }
};

export const setOrientation = (data: ISetOrientation['data']) => ({
  data,
  type: SET_ORIENTATION,
});
