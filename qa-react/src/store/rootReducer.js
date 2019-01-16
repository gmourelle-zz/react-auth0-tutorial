import { combineReducers } from 'redux';
import { questionsReducer } from '../redux/reducers';
import { userReducer } from '../redux/reducers';
export const rootReducer = combineReducers({
  questionsReducer,
  userReducer
});
