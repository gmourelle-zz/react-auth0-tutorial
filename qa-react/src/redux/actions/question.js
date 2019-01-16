import { actionTypes } from './actionTypes';

import { postAnswer, getQuestion } from '../../services';

const getQuestionSuccess = payload => ({
  type: actionTypes.GET_QUESTION_SUCCESS
});
const getQuestionRequest = () => ({
  type: actionTypes.GET_QUESTION_REQUEST
});

const submitAnswerRequest = () => ({
  type: actionTypes.SUBMIT_ANSWER_REQUEST
});

const getError = payload => ({
  type: actionTypes.RAISE_ERROR,
  payload: payload
});

export const submitAnswerSuccess = payload => ({
  type: actionTypes.SUBMIT_ANSWER_SUCCESS,
  payload
});

export const submitAnswer = (questionId, answer) => {
  return dispatch => {
    dispatch(submitAnswerRequest());
    postAnswer(questionId, answer).then(
      answer_data => dispatch(submitAnswerSuccess(answer_data)),
      error => {
        dispatch(getError(error));
      }
    );
  };
};

export const fetchQuestion = questionId => {
  return dispatch => {
    dispatch(getQuestionRequest());
    getQuestion(questionId).then(question_data => {
      dispatch(getQuestionSuccess(question_data));
    });
    //.catch(err => getError(err));
  };
};
