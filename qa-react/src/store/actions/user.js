import { Actions } from '../constants/actionTypes';
import auth0Client from '../../Auth';

export const signOutSuccess = () => ({
  type: Actions.SIGN_OUT_SUCCESS
});

export const signOutRequest = () => ({
  type: Actions.SIGN_OUT_REQUEST
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

export const checkingSession = () => {};
export const signIn = () => {};
export const signOut = history => {
  return dispatch => {
    auth0Client.signOut();
    dispatch(signOutSuccess());
    history.replace('/');
  };
};
