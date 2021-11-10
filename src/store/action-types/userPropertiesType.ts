import { UserListItem } from '../../types/userType';

export interface ISetUsersList {
  type: string;
  payload: UserListItem[];
}

export interface ISetIncrementUsersList {
  type: string;
  payload: number;
}

export type ISetUserProperties = ISetUsersList | ISetIncrementUsersList;
