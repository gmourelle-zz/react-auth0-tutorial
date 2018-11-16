import { Actions } from '../constants/actionTypes';
import { postAnswer, getQuestion } from './../../services';

export const getQuestionSuccess = payload => ({
  type: Actions.GET_QUESTION_SUCCESS
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

export const submitAnswerSuccess = payload => ({
  type: Actions.SUBMIT_ANSWER_SUCCESS,
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
