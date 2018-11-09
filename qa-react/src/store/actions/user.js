import { Actions } from '../constants/actionTypes';
import auth0Client from '../../Auth';

export const signOutSuccess = () => ({
  type: Actions.CHECKING_SESSION
});
export const checkingSessionRequest = () => ({
  type: Actions.CHECKING_SESSION
});

export const signOutRequest = () => ({
  type: Actions.SIGN_OUT_REQUEST
});

export const submitNewQuestionRequest = () => ({
  type: Actions.SUBMIT_NEW_QUESTION_REQUEST
});

export const submitNewQuestionSuccess = payload => ({
  type: Actions.CHECKING_SESSION,
  payload
});

const getError = payload => ({
  type: Actions.RAISE_ERROR,
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
