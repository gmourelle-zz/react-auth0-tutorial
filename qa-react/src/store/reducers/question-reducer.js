import { Actions } from '../constants/actionTypes';

export const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case Actions.GET_QUESTION_REQUEST:
      return { ...state, fetchingQuestion: true };
    case Actions.GET_QUESTION_SUCCESS:
      return { ...state, question: action.payload, fetchingQuestion: false };
    case Actions.SUBMIT_ANSWER_SUCCESS:
      return {
        ...state,
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
