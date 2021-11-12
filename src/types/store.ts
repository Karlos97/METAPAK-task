import { NotificationType } from './notificationType';
import { RequestsState } from './requestsType';
import { UserDetailsType, UserListItem } from './userType';

export interface IStore {
  notification: NotificationType;
  usersList: Array<UserListItem>;
  userDetails: Map<string, UserDetailsType>;
  requestsStatus: RequestsState;
  page: number;
}
