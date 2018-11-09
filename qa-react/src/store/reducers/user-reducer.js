import { Actions } from '../constants/actionTypes';

const initialState = {
  checkingSession: true
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHECKING_SESSION:
      return { ...state, checkingSession: false };
    default:
      return state;
  }
};
