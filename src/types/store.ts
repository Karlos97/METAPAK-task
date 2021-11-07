import { NotificationType } from './notificationType';
import { RequestsState } from './requestsType';
import { UserDetails, UserListItem } from './userType';

export interface IStore {
  notification: NotificationType;
  usersList: Array<UserListItem>;
  userDetails: Map<string, UserDetails>;
  requestsStatus: RequestsState;
  page: number;
}
