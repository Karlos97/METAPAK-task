import { RequestStatus } from '../../types/requestsType';
import { ISetRequestStatus } from '../action-types/requestsActionsType';
import {
  SET_LOADING_USERS_LIST_DATA_STATUS,
  SET_LOADING_USER_DETAILS_DATA_STATUS,
  SET_LOADING_USER_REPOS_DATA_STATUS,
} from './actionsType';

export const setLoadingUsersListStatus = (
  payload: RequestStatus
): ISetRequestStatus => ({
  type: SET_LOADING_USERS_LIST_DATA_STATUS,
  payload,
});

export const setLoadingUserDetailsStatus = (
  payload: RequestStatus
): ISetRequestStatus => ({
  type: SET_LOADING_USER_DETAILS_DATA_STATUS,
  payload,
});
export const setLoadingUserReposStatus = (
  payload: RequestStatus
): ISetRequestStatus => ({
  type: SET_LOADING_USER_REPOS_DATA_STATUS,
  payload,
});
