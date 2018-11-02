import { combineReducers } from 'redux';
import { questionsReducer } from './questions-reducer';
import { questionReducer } from './question-reducer';

export const reducer = combineReducers({
  questions: questionsReducer,
  question: questionReducer
});
