"use strict";

import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  USER_ADDED_TO_LIST,
  USER_DELETE_FROM_LIST,
  DELETE_ALL_USERS_FROM_LIST
} from "./constant";

const usersPending = () => {
  return {
    type: FETCH_USERS_PENDING
  };
};

const usersSuccess = newUsersList => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: newUsersList
  };
};

const usersError = error => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  };
};

export const fetchUsers = (fakeDataService, dispatch) => () => {
  dispatch(usersPending());
  setTimeout(() => {
    fakeDataService
      .getUsersBlockquote()
      .then(data => dispatch(usersSuccess(data)))
      .catch(err => dispatch(usersError(err)));
  }, 700);
};

export const addUserToList = user_id => {
  return {
    type: USER_ADDED_TO_LIST,
    payload: user_id
  };
};

export const deleteUserFromList = user_id => {
  return {
    type: USER_DELETE_FROM_LIST,
    payload: user_id
  };
};

export const deleteAllUserFromList = user_id => {
  return {
    type: DELETE_ALL_USERS_FROM_LIST,
    payload: user_id
  };
};
