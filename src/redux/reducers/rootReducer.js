import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import nameReducer from './nameReducer';
import questionsReducer from './questionsReducer';

const rootReducer = combineReducers({
  emailReducer,
  nameReducer,
  questionsReducer,
});

export default rootReducer;
