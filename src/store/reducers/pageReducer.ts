import { ISetPage } from '../action-types/pageActionType';
import { SET_PAGE } from '../actions/actionsType';

const pageReducer = (state = 1, action: ISetPage): number => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default pageReducer;
