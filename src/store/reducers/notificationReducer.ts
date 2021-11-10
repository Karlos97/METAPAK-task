import { NotificationType } from '../../types/notificationType';
import { ISetNotification } from '../action-types/notificationsPropertiesType';
import { SET_NOTIFICATION } from '../actions/actionsType';

const defaultState: NotificationType = {
  status: '',
  title: '',
  message: '',
};

const notificationReducer = (
  state: NotificationType = defaultState,
  action: ISetNotification
): NotificationType => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return action.payload;
    default:
      return state;
  }
};

export default notificationReducer;
