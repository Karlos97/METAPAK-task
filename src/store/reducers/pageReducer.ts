import { ISetPage } from '../action-types/pageActionType';
import { SET_PAGE } from '../actions/actionsType';

const pageReducer = (state = 0, action: ISetPage): number => {
  switch (action.type) {
    case SET_PAGE:
      return state + action.payload;
    default:
      return state;
  }
};

export default pageReducer;
