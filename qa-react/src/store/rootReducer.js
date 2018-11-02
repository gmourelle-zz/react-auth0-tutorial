import { combineReducers } from 'redux';
import { reducer as app } from './reducers';

const rootReducer = combineReducers({
  app
});

export default rootReducer;
