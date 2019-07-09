import { SIGN_IN, SIGN_OUT } from "../constants/types";

const INITIAL_STATE = {
  isSignedIn: false,
  authMethod: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        authMethod: action.payload.authMethod,
        userId: action.payload.userId
      };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, authMethod: null, userId: null };
    default:
      return state;
  }
};
