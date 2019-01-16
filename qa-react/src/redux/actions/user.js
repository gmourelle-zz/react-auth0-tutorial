import { actionTypes } from './actionTypes';

import auth0Client from '../../Auth';

export const signOutSuccess = () => ({
  type: actionTypes.CHECKING_SESSION
});
export const checkingSessionRequest = () => ({
  type: actionTypes.CHECKING_SESSION
});

export const signOutRequest = () => ({
  type: actionTypes.SIGN_OUT_REQUEST
});

export const submitNewQuestionRequest = () => ({
  type: actionTypes.SUBMIT_NEW_QUESTION_REQUEST
});

export const submitNewQuestionSuccess = payload => ({
  type: actionTypes.CHECKING_SESSION,
  payload
});

const getError = payload => ({
  type: actionTypes.RAISE_ERROR,
  payload: payload
});

export const signIn = () => {};
export const signOut = history => {
  return dispatch => {
    auth0Client.signOut();
    dispatch(signOutSuccess());
    history.replace('/');
  };
};
