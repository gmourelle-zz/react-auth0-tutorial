  import { Actions } from '../constants/actionTypes';

export const getQuestionsSuccess = payload => ({
  type: Actions.GET_QUESTIONS_SUCCESS,
  payload
});
export const getQuestionsRequest = () => ({
  type: Actions.GET_QUESTIONS_REQUEST
});

export const filterPlayers = payload => ({
  type: Actions.FILTER_PLAYERS,
  payload: payload
});

const getError = payload => ({
  type: Actions.RAISE_ERROR,
  payload: payload
});

const urlQuestions = 'http://localhost:8081/';

export const fetchQuestions = () => {
  return dispatch => {
    dispatch(getQuestionsRequest());
    return fetch(urlQuestions)
      .then(data => data.json())
      .then(question_data => {
        dispatch(getQuestionsSuccess(question_data));
      })
      .catch(err => getError(err));
  };
};
