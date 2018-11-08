import { Actions } from '../constants/actionTypes';
import { postNewQuestion } from './../../services';

export const submitNewQuestionRequest = () => ({
  type: Actions.SUBMIT_NEW_QUESTION_REQUEST
});

export const submitNewQuestionSuccess = payload => ({
  type: Actions.SUBMIT_NEW_QUESTION_SUCCESS,
  payload
});

const getError = payload => ({
  type: Actions.RAISE_ERROR,
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
