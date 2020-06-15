import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import gameReducer from './gameReducer';

const rootReducer = combineReducers({
  inputReducer,
  gameReducer,
});

export default rootReducer;
