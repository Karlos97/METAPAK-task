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
  (page: number) => (dispatch: Dispatch) => {
    dispatch(setLoadingUsersListDataStatus('ONGOING'));
    getUsersList(page)
      .then((users) => {
        // console.log(users)
        // dispatch(addUsersToUserList(users as UserListItem[]));
<<<<<<< HEAD
        dispatch(addUsersToUserList(users));
        dispatch(
          setNotification({
            status: 'success',
            title: 'User list fetched.',
          })
        );
        dispatch(setLoadingUsersListDataStatus('FULFILLED'));
        dispatch(setPage(usersPerPage));
      })
      .catch(() => {
        dispatch(
          setNotification({
            status: 'error',
            title: 'Problem with fetching user list.',
          })
        );
=======
        dispatch(setLoadingUsersListDataStatus('FULFILLED'));
        dispatch(addUsersToUserList(users));
        // dispatch(
        //   setNotification({
        //     status: 'success',
        //     title: 'User list fetched.',
        //   })
        // );
        dispatch(setPage(usersPerPage));
      })
      .catch(() => {
        // dispatch(
        //   setNotification({
        //     status: 'error',
        //     title: 'Problem with fetching user list.',
        //   })
        // );
>>>>>>> styling
        dispatch(setLoadingUsersListDataStatus('ERROR'));
      });
  };
