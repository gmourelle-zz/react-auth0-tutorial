import { Actions } from '../constants/actionTypes';
import auth0Client from '../../Auth';
import axios from 'axios';

export const getQuestionSuccess = payload => ({
  type: Actions.GET_QUESTION_SUCCESS,
  payload
});
export const getQuestionRequest = () => ({
  type: Actions.GET_QUESTION_REQUEST
});

export const submitAnswerRequest = () => ({
  type: Actions.SUBMIT_ANSWER_REQUEST
});
const getError = payload => ({
  type: Actions.RAISE_ERROR,
  payload: payload
});

export const submitAnswerSuccess = () => ({
  type: Actions.SUBMIT_ANSWER_SUCCESS
});

const urlQuestion = 'http://localhost:8081/';

export const fetchQuestion = questionId => {
  return dispatch => {
    dispatch(getQuestionRequest());
    return fetch(`http://localhost:8081/${questionId}`)
      .then(data => data.json())
      .then(question_data => {
        dispatch(getQuestionSuccess(question_data));
      })
      .catch(err => getError(err));
  };
};

export const submitAnswer = (questionId, answer) => {
  return dispatch => {
    dispatch(submitAnswerRequest());
    return axios
      .post(
        `http://localhost:8081/answer/${questionId}`,
        {
          answer
        },
        {
          headers: { Authorization: `Bearer ${auth0Client.getIdToken()}` }
        }
      )
      .then(dispatch(submitAnswerSuccess()))
      .catch(err => getError(err));
  };
};
