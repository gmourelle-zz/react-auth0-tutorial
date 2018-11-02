import { Actions } from '../constants/actionTypes';

const initialState = {
  questions: [],
  fetchingQuestions: false
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_QUESTIONS_REQUEST:
      return { ...state, fetchingQuestions: true };
    case Actions.GET_QUESTIONS_SUCCESS:
      return { ...state, questions: action.payload, fetchingQuestions: false };
    case Actions.RAISE_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

//export default questions;
