import { UserListItem } from './userType';

export interface defaultStoreStateType {
  startIndex: number;
  usersPerFetch: number;
  loadingUsersListData: boolean;
  loadingUserDetailsData: boolean;
  userList: UserListItem[];
}
