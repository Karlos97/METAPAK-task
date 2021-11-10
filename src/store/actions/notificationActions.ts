import { NotificationType } from '../../types/notificationType';
import {
  ISetLoadingUserDetailsDataStatus,
  ISetLoadingUsersListDataStatus,
  ISetNotification,
} from '../action-types/notificationsPropertiesType';
import {
  SET_LOADING_USERS_LIST_DATA_STATUS,
  SET_LOADING_USER_DETAILS_DATA_STATUS,
  SET_LOADING_USER_REPOS_DATA_STATUS,
  SET_NOTIFICATION,
} from './actionsType';

export const setNotification = (
  payload: NotificationType
): ISetNotification => ({
  type: SET_NOTIFICATION,
  payload,
});
export const setLoadingUsersListDataStatus = (
  payload: string
): ISetLoadingUsersListDataStatus => ({
  type: SET_LOADING_USERS_LIST_DATA_STATUS,
  payload,
});

export const setLoadingUserDetailsDataStatus = (
  payload: string
): ISetLoadingUserDetailsDataStatus => ({
  type: SET_LOADING_USER_DETAILS_DATA_STATUS,
  payload,
});
export const setLoadingUserReposDataStatus = (
  payload: string
): ISetLoadingUserDetailsDataStatus => ({
  type: SET_LOADING_USER_REPOS_DATA_STATUS,
  payload,
});
