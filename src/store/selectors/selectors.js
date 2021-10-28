export const selectShowLoadingUserDetailsData = ({ usersOptions }) =>
usersOptions?.loadingUserDetailsData;
export const selectShowLoadingUsersListData = ({ usersOptions }) =>
usersOptions?.loadingUsersListData;

export const selectShowUsersList = ({ usersOptions }) =>
usersOptions.userList;

export const selectShowNotification = ({ notification }) =>
  notification;

export const selectShowStartIndex = ({ usersOptions }) =>
  usersOptions.startIndex;
