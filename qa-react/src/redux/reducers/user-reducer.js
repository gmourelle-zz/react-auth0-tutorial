import { actionTypes } from '../actions';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CHECKING_SESSION:
      return { ...state, checkingSession: false };
    default:
      return state;
  }
};
