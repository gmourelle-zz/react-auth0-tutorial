import { combineReducers } from 'redux';
import { questionsReducer } from './reducers/questions-reducer';

export const rootReducer = combineReducers({
  questionsReducer
});
