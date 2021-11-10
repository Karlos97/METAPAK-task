import { NotificationType } from '../../types/notificationType';

export interface ISetLoadingUsersListDataStatus {
  type: string;
  payload: string;
}
export interface ISetLoadingUserDetailsDataStatus {
  type: string;
  payload: string;
}
export interface ISetLoadingUserReposDataStatus {
  type: string;
  payload: string;
}
export interface ISetNotification {
  type: string;
  payload: NotificationType;
}
