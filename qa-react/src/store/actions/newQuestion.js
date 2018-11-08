import { Actions } from '../constants/actionTypes';
import auth0Client from '../../Auth/Auth';
import axios from 'axios';

export const getQuestionSuccess = payload => ({
  type: Actions.GET_QUESTION_SUCCESS,
  payload
});

export const getQuestionRequest = () => ({
  type: Actions.GET_QUESTION_REQUEST
});

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
  // return dispatch => {
  //   dispatch(submitAnswerRequest());

  //   return fetch(`http://localhost:8081/answer/${questionId}`, {
  //     method: 'POST',
  //     body: JSON.stringify(answer),
  //     headers: new Headers({
  //       'Content-type': 'application/json',
  //       Authorization: `Bearer ${auth0Client.getIdToken()}`
  //     })
  //   })
  //     .then(question_data =>
  //       dispatch(submitAnswerSuccess(question_data.data.question))
  //     )
  //     .catch(err => getError(err));
  // };
  return dispatch => {
    dispatch(submitNewQuestionRequest());
    return axios
      .post(
        `http://localhost:8081`,
        {
          title,
          description
        },
        {
          headers: { Authorization: `Bearer ${auth0Client.getIdToken()}` }
        }
      )
      .then(
        question_data =>
          dispatch(submitNewQuestionSuccess(question_data.data.question)),
        history.push('/')
      )
      .catch(err => getError(err));
  };
};
