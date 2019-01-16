import { actionTypes } from './actionTypes';
import { postNewQuestion } from '../../services';

const submitNewQuestionRequest = () => ({
  type: actionTypes.SUBMIT_NEW_QUESTION_REQUEST
});

const submitNewQuestionSuccess = payload => ({
  type: actionTypes.SUBMIT_NEW_QUESTION_SUCCESS,
  payload
});

const getError = payload => ({
  type: actionTypes.RAISE_ERROR,
  payload: payload
});

export const submitNewQuestion = (title, description, history) => {
  return dispatch => {
    dispatch(submitNewQuestionRequest());

    postNewQuestion(title, description).then(
      question_data => dispatch(submitNewQuestionSuccess(question_data)),
      history.push('/'),
      error => {
        dispatch(getError(error));
      }
    );
  };
};
