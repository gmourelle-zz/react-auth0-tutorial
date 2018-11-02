import { Actions } from '../constants/actionTypes';

const initialState = {
  questions: [],
  question:{},
  fetchingQuestions: false
};

 const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_QUESTIONS_REQUEST:
      return { ...state, fetchingQuestions: true };
    case Actions.GET_QUESTIONS_SUCCESS:
      return { ...state, questions: action.payload, fetchingQuestions: false };
    case Actions.GET_QUESTION_REQUEST:
      return { ...state, fetchingQuestion: true };
    case Actions.GET_QUESTION_SUCCESS:
      return { ...state, question: action.payload, fetchingQuestion: false };
    case Actions.SUBMIT_ANSWER_SUCCESS:
      return {
        ...state,
        question:action.payload,
        updatingQuestion: false
      };
    case Actions.SUBMIT_ANSWER_REQUEST:
      return { ...state, updatingQuestion: true };
    case Actions.RAISE_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default questionsReducer;
