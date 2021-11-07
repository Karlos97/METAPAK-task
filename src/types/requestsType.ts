export const LOADING_USERS_LIST = 'LOADING_USERS_LIST';
export const LOADING_USER_DETAILS = 'LOADING_USER_DETAILS';

export enum RequestStatus {
  'ONGOING' = 'ONGOING',
  'ERROR' = 'ERROR',
  'FULFILLED' = 'FULFILLED',
  'IDLE' = 'IDLE',
}

export interface RequestsState {
  [key: string]: RequestStatus;
}
