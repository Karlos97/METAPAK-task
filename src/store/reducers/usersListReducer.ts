import { ISetUsersList } from '../action-types/userPropertiesType';
import { ADD_USERS_TO_USERS_LIST } from '../actions/actionsType';
import { UserListItem } from '../../types/userType';

const defaultState: UserListItem[] = [];

const usersListReducer = (
  state: UserListItem[] = defaultState,
  action: ISetUsersList
): UserListItem[] => {
  switch (action.type) {
    case ADD_USERS_TO_USERS_LIST: {
      const users = [...state, ...action.payload];
<<<<<<< HEAD
      // const users = state ? [...state, ...action.payload] : action.payload;

      // const userListAfterFilteringSameIds = [
      //   ...new Set(users.map((user) => user.id)),
      // ].map((id) => users.find((user) => user.id === id));

      // return userListAfterFilteringSameIds as UserListItem[];
      return users;
=======
      const userListAfterFilteringSameIds = [
        ...new Set(users.map((user) => user.id)),
      ].map((id) => users.find((user) => user.id === id));

      return userListAfterFilteringSameIds as UserListItem[];
>>>>>>> styling
    }

    default: {
      return state;
    }
  }
};

export default usersListReducer;
