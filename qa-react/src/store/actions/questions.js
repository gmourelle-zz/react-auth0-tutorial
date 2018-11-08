import { Actions } from '../constants/actionTypes';
import { getQuestions } from './../../services';

const getQuestionsSuccess = payload => ({
  type: Actions.GET_QUESTIONS_SUCCESS,
  payload
});
const getQuestionsRequest = () => ({
  type: Actions.GET_QUESTIONS_REQUEST
});
const getError = payload => ({
  type: Actions.RAISE_ERROR,
  payload: payload
});

export const fetchQuestions = () => {
  return dispatch => {
    dispatch(getQuestionsRequest());

    getQuestions().then(
      question_data => {
        dispatch(getQuestionsSuccess(question_data));
      },
      error => {
        dispatch(getError(error));
      }
    );
  };
};
