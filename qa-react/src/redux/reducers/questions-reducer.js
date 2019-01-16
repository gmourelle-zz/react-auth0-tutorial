import { actionTypes } from '../actions';

export const questionsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_QUESTIONS_REQUEST:
      return { ...state, fetchingQuestions: true };
    case actionTypes.GET_QUESTIONS_SUCCESS:
      const questions = action.payload.reduce(
        (acc, curr) => ({ ...acc, [curr.id]: { ...curr } }),
        {}
      );
      return {
        ...state,
        questions: questions,
        fetchingQuestions: false
      };
    case actionTypes.GET_QUESTION_REQUEST:
      return { ...state, fetchingQuestion: true };
    case actionTypes.GET_QUESTION_SUCCESS:
      return { ...state, fetchingQuestion: false };
    case actionTypes.SUBMIT_NEW_QUESTION_SUCCESS:
      return {
        ...state,
        questions: { ...state.questions, [action.payload.id]: action.payload },
        fetchingNewQuestion: false
      };
    case actionTypes.SUBMIT_NEW_QUESTION_REQUEST:
      return {
        ...state,
        fetchingNewQuestion: true
      };
    case actionTypes.SUBMIT_ANSWER_SUCCESS:
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.payload.id]: action.payload
        },
        updatingQuestion: false
      };
    case actionTypes.SUBMIT_ANSWER_REQUEST:
      return { ...state, updatingQuestion: true };
    case actionTypes.SIGN_OUT_SUCCESS:
      return { ...state, loggedIn: false };
    case actionTypes.RAISE_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
