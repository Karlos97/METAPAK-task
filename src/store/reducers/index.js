import { combineReducers } from 'redux';
import usersOptionsReducer from './usersOptionsReducer';
import notificationReducer from './errorReducer';


const reducers = combineReducers({
  usersOptions: usersOptionsReducer,
  notification: notificationReducer,
})
export default reducers;
