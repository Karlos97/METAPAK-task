import { combineReducers } from 'redux';
import usersOptionsReducer from './usersListReducer';
import notificationReducer from './notificationReducer';
import requestsStatusReducer from './requestsStatusReducer';
import pageReducer from './pageReducer';

const reducers = combineReducers({
  notification: notificationReducer,
  usersList: usersOptionsReducer,
  requestsStatus: requestsStatusReducer,
  page: pageReducer,
});
export default reducers;

export type RootState = ReturnType<typeof reducers>;
