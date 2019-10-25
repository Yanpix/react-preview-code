import * as types from "../actions/constant";

const updateUsersList = (state, action) => {
  if (state === undefined) {
    return {
      users: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case types.FETCH_USERS_PENDING:
      return {
        users: [],
        loading: true,
        error: null
      };

    case types.FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: null
      };

    case types.FETCH_USERS_ERROR:
      return {
        users: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.usersList;
  }
};

export default updateUsersList;
