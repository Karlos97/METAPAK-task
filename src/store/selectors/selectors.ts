// import { NotificationType } from '../../types/notificationType';
import { NotificationType } from '../../types/notificationType';
import {
  LOADING_USERS_LIST,
  LOADING_USER_DETAILS,
  LOADING_USER_REPOS,
  RequestStatus,
} from '../../types/requestsType';
import { IStore } from '../../types/store';
import { UserListItem } from '../../types/userType';

export const selectShowLoadingUserDetailsData = ({
  requestsStatus,
}: IStore): boolean =>
  requestsStatus[LOADING_USER_DETAILS] === RequestStatus.ONGOING;

export const selectShowLoadingUsersListData = ({
  requestsStatus,
}: IStore): boolean =>
  requestsStatus[LOADING_USERS_LIST] === RequestStatus.ONGOING;
export const selectShowLoadingUserReposData = ({
  requestsStatus,
}: IStore): boolean =>
  requestsStatus[LOADING_USER_REPOS] === RequestStatus.ONGOING;

export const selectShowUsersListFetchStatus = ({
  requestsStatus,
}: IStore): boolean =>
  requestsStatus[LOADING_USERS_LIST] === ('FULFILLED' || 'ERROR');
export const selectShowUserDetailsFetchStatus = ({
  requestsStatus,
}: IStore): boolean =>
  requestsStatus[LOADING_USER_DETAILS] === ('FULFILLED' || 'ERROR');
export const selectShowUserReposFetchStatus = ({
  requestsStatus,
}: IStore): boolean =>
  requestsStatus[LOADING_USER_REPOS] === ('FULFILLED' || 'ERROR');

export const selectUsersList = ({ usersList }: IStore): UserListItem[] =>
  usersList.length ? usersList : [];

export const selectShowNotification = ({
  notification,
}: IStore): NotificationType => notification;

export const selectShowPage = ({ page }: IStore): number => page;
