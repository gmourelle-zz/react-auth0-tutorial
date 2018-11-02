import { combineReducers } from 'redux';
import questionsReducer from './reducers/questions-reducer';

const rootReducer = combineReducers({
  questionsReducer
});

export default rootReducer;
