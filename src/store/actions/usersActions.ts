import { Dispatch } from 'redux';
import { usersPerPage } from '../../config/config';
import getUsersList from '../../helper/getData/getUsersList';
import { UserListItem } from '../../types/userType';
import { ISetUsersList } from '../action-types/userPropertiesType';
import { ADD_USERS_TO_USERS_LIST } from './actionsType';
import {
  setLoadingUsersListDataStatus,
  setNotification,
} from './notificationActions';
import { setPage } from './pageActions';

export const addUsersToUserList = (payload: UserListItem[]): ISetUsersList => ({
  type: ADD_USERS_TO_USERS_LIST,
  payload,
});

export const getAndAddUsersToUserList =
  (page = 0) =>
  (dispatch: Dispatch): void => {
    dispatch(setLoadingUsersListDataStatus('ONGOING'));
    getUsersList(page)
      .then((users) => {
        dispatch(setLoadingUsersListDataStatus('FULFILLED'));
        dispatch(addUsersToUserList(users));
        dispatch(
          setNotification({
            status: 'success',
            title: 'User list fetched.',
          })
        );
        dispatch(setPage(usersPerPage));
      })
      .catch(() => {
        dispatch(
          setNotification({
            status: 'error',
            title: 'Problem with fetching user list.',
          })
        );
        dispatch(setLoadingUsersListDataStatus('ERROR'));
      });
  };
