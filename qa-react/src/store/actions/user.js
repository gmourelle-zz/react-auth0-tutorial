import { Actions } from '../constants/actionTypes';
import auth0Client from '../../Auth/Auth';
import axios from 'axios';

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

export const signOut = history => {
  // return dispatch => {
  //   dispatch(signOutSuccess());
  //   auth0Client.signOut();
  //   history.replace('/');
  // };
  signOutSuccess();
  auth0Client.signOut();
  history.replace('/');
};
