import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducer';

const initialState = {
  questionsReducer: {
    questions: {
      '1': {
        id: 1,
        title: 'How do I make a sandwich?',
        description:
          'I am trying very hard, but I do not know how to make a delicious sandwich. Can someone help me?',
        answers: []
      }
    },
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
