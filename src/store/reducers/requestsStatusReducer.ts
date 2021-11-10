import {
  LOADING_USER_DETAILS,
  LOADING_USERS_LIST,
  RequestsState,
  RequestStatus,
  LOADING_USER_REPOS,
} from '../../types/requestsType';
import { ISetRequestStatus } from '../action-types/requestsActionsType';
import {
  SET_LOADING_USERS_LIST_DATA_STATUS,
  SET_LOADING_USER_DETAILS_DATA_STATUS,
  SET_LOADING_USER_REPOS_DATA_STATUS,
} from '../actions/actionsType';

const initialState: RequestsState = {
  LOADING_USERS_LIST: RequestStatus.IDLE,
  LOADING_USER_DETAILS: RequestStatus.IDLE,
};

const requestsStatusReducer = (
  state: RequestsState = initialState,
  action: ISetRequestStatus
): RequestsState => {
  switch (action.type) {
    case SET_LOADING_USERS_LIST_DATA_STATUS:
      return {
        ...state,
        [LOADING_USERS_LIST]: action.payload,
      };
    case SET_LOADING_USER_DETAILS_DATA_STATUS:
      return {
        ...state,
        [LOADING_USER_DETAILS]: action.payload,
      };
    case SET_LOADING_USER_REPOS_DATA_STATUS:
      return {
        ...state,
        [LOADING_USER_REPOS]: action.payload,
      };
    default:
      return state;
  }
};

export default requestsStatusReducer;
