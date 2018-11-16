import { Actions } from '../constants/actionTypes';

const initialState = {
  questions: {},
  fetchingQuestions: false
};

export const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_QUESTIONS_REQUEST:
      return { ...state, fetchingQuestions: true };
    case Actions.GET_QUESTIONS_SUCCESS:
      const questions = action.payload.reduce(
        (acc, curr) => ({ ...acc, [curr.id]: { ...curr } }),
        {}
      );
      return {
        ...state,
        questions: questions,
        fetchingQuestions: false
      };
    case Actions.GET_QUESTION_REQUEST:
      return { ...state, fetchingQuestion: true };
    case Actions.GET_QUESTION_SUCCESS:
      return { ...state, fetchingQuestion: false };
    case Actions.SUBMIT_NEW_QUESTION_SUCCESS:
      return {
        ...state,
        questions: { ...state.questions, [action.payload.id]: action.payload },
        fetchingNewQuestion: false
      };
    case Actions.SUBMIT_NEW_QUESTION_REQUEST:
      return {
        ...state,
        fetchingNewQuestion: true
      };
    case Actions.SUBMIT_ANSWER_SUCCESS:
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.payload.id]: action.payload
        },
        updatingQuestion: false
      };
    case Actions.SUBMIT_ANSWER_REQUEST:
      return { ...state, updatingQuestion: true };
    case Actions.SIGN_OUT_SUCCESS:
      return { ...state, loggedIn: false };
    case Actions.RAISE_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
