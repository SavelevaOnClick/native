import {combineReducers} from 'redux';

export default combineReducers({
  global: require('./global').default,
});
