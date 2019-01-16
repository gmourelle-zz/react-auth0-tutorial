import { actionTypes } from './actionTypes';
import { getQuestions } from '../../services';

const getQuestionsSuccess = payload => ({
  type: actionTypes.GET_QUESTIONS_SUCCESS,
  payload
});
const getQuestionsRequest = () => ({
  type: actionTypes.GET_QUESTIONS_REQUEST
});
const getError = payload => ({
  type: actionTypes.RAISE_ERROR,
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
