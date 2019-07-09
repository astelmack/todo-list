import {
  FETCH_ITEM,
  FETCH_LIST,
  CREATE_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  SIGN_IN,
  SIGN_OUT
} from "../constants/types";
import { createDummyItem } from "../constants/DummyDatastore";

export const signIn = (authMethod, userId) => {
  return {
    type: SIGN_IN,
    payload: {
      authMethod,
      userId
    }
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// --- Dummy Datastore actions ---
export const fetchListDummy = dummyDatastore => async dispatch => {
  const response = await dummyDatastore.data;

  dispatch({ type: FETCH_LIST, payload: response });
};

export const fetchItemDummy = (id, dummyDatastore) => async dispatch => {
  const response = await dummyDatastore.data.filter(current => {
    return current !== undefined && current.id === id;
  });

  dispatch({ type: FETCH_ITEM, payload: response });
};

export const createItemDummy = (
  formValues,
  dummyDatastore
) => async dispatch => {
  const response = await createDummyItem(formValues, dummyDatastore);
  dispatch({ type: CREATE_ITEM, payload: response });
};

// --- End Dummy Datastore actions ---
