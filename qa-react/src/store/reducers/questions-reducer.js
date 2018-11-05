import { Actions } from '../constants/actionTypes';
import { initialState } from '../initialState';

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
    case Actions.SUBMIT_NEW_QUESTION_SUCCESS:
      const qs = action.payload.questions.map(q => ({
        id: q.id,
        title: q.title,
        description: q.description,
        answers: q.answers.length
      }));
      return {
        ...state,
        questions: qs,
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
        question: action.payload,
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
