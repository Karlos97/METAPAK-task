// import { NotificationType } from '../../types/notificationType';
import { NotificationType } from '../../types/notificationType';
import {
  LOADING_USERS_LIST,
  LOADING_USER_DETAILS,
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

<<<<<<< HEAD
=======
export const selectShowUsersListFetchStatus = ({
  requestsStatus,
}: IStore): string => requestsStatus[LOADING_USERS_LIST];
export const selectShowUserDetailsFetchStatus = ({
  requestsStatus,
}: IStore): string => requestsStatus[LOADING_USER_DETAILS];
// export const selectShowDataFetchFailed = ({
//   requestsStatus,
// }: IStore): boolean =>
//   requestsStatus[LOADING_USERS_LIST] === RequestStatus.ERROR;

>>>>>>> styling
export const selectUsersList = ({ usersList }: IStore): UserListItem[] =>
  usersList.length ? usersList : [];

export const selectShowNotification = ({
  notification,
}: IStore): NotificationType => notification;

<<<<<<< HEAD
export const selectIsError = ({ notification }: IStore): boolean =>
  notification.status !== 'error';
=======
// export const selectIsError = ({ notification }: IStore): boolean =>
//   notification.status !== 'error';
>>>>>>> styling
export const selectShowPage = ({ page }: IStore): number => page;
// export const selectUserItemById = (
//   { usersList }: IStore,
//   id: number
// ): UserListItem[] => usersList.filter((user) => user.id === id);

// export const selectShowStartIndex = ({ usersOptions }: StateType): number =>
// usersOptions.startIndex;

// export const selectShowLoadingUserDetailsData = ({ notification }) =>
//   notification?.loadingUserDetailsData;
// export const selectShowLoadingUsersListData = ({ notification }) =>
//   notification?.loadingUsersListData;

// export const selectShowUsersList = ({ usersOptions }) => usersOptions.userList;

// export const selectShowNotification = ({ notification }) => notification;

// export const selectShowStartIndex = ({ usersOptions }) =>
//   usersOptions.startIndex;
