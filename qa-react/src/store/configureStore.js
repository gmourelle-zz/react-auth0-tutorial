import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';

const initialState = {
  questionsReducer: {
    questions: {},
    fetchingQuestions: false
  },
  userReducer: {
    checkingSession: false
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
