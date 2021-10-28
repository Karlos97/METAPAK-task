import getUsersList from '../../helper/getData/getUsersList';
import {
  ADD_USERS_TO_USERS_LIST,
  INCREMENT_START_INDEX,
  SET_LOADING_USERS_LIST_DATA_STATUS,
  SET_LOADING_USER_DETAILS_DATA_STATUS,
} from './actionsType';
import { setNotification } from './notificationActions';

export const addUsersToUserList = (payload) => ({
  type: ADD_USERS_TO_USERS_LIST,
  payload,
});

export const setLoadingUsersListDataStatus = (payload) => ({
  type: SET_LOADING_USERS_LIST_DATA_STATUS,
  payload,
});

export const setLoadingUserDetailsDataStatus = (payload) => ({
  type: SET_LOADING_USER_DETAILS_DATA_STATUS,
  payload,
});
export const incrementStartIndex = (payload) => ({
  type: INCREMENT_START_INDEX,
  payload,
});

export const getAndAddUsersToUserList =
  (genre, startIndex, usersPerFetch) => (dispatch) => {
    dispatch(setLoadingUsersListDataStatus(true));
    getUsersList(genre, startIndex, usersPerFetch).then((users) => {
        // console.log(users)
        dispatch(addUsersToUserList(users));
        dispatch(
          setNotification({
            isActive: true,
            status: 'success',
            title: 'User list fetched.',
          }),
        );
        dispatch(setLoadingUsersListDataStatus(false));
        dispatch(incrementStartIndex());
      })
      .catch(() => {
        dispatch(
          setNotification({
            isActive: true,
            status: 'error',
            title: 'Problem with fetching user list.',
          }),
        );
        dispatch(setLoadingUsersListDataStatus(false));
      });
  };
