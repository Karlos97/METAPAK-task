import { RequestStatus } from '../../types/requestsType';

export interface ISetRequestStatus {
  type: string;
  payload: RequestStatus;
}
