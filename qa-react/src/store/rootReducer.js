import { combineReducers } from 'redux';
import { questionsReducer } from './reducers/questions-reducer';
import { userReducer } from './reducers/user-reducer';
export const rootReducer = combineReducers({
  questionsReducer,
  userReducer
});
