import {
  ADD_USERS_TO_USERS_LIST,
  INCREMENT_START_INDEX,
  SET_LOADING_USERS_LIST_DATA_STATUS,
  SET_LOADING_USER_DETAILS_DATA_STATUS,
} from '../actions/actionsType';

const defaultState = {
  startIndex: 0,
  usersPerFetch: 15,
  loadingUsersListData: true,
  loadingUserDetailsData: true,
};

const usersOptionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING_USERS_LIST_DATA_STATUS: {
      return {
        ...state,
        loadingUsersListData: action.payload,
      };
    }
    case SET_LOADING_USER_DETAILS_DATA_STATUS: {
      return {
        ...state,
        loadingUserDetailsData: action.payload,
      };
    }
    case ADD_USERS_TO_USERS_LIST: {
      // console.log(action.payload)
      const users = state.userList
        ? [...state.userList, ...action.payload]
        : action.payload;

      const userListAfterFilteringSameIds = [
        ...new Set(users.map((user) => user.id)),
      ].map((id) => users.find((user) => user.id === id));
      return {
        ...state,
        userList: userListAfterFilteringSameIds,
      };
    }
    case INCREMENT_START_INDEX: {
      const startIndex = state.startIndex + state.usersPerFetch;
      return {
        ...state,
        startIndex,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersOptionsReducer;
