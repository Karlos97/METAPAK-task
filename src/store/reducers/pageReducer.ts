import { ISetPage } from '../action-types/pageActionType';
import { SET_PAGE } from '../actions/actionsType';

<<<<<<< HEAD
const pageReducer = (state = 1, action: ISetPage): number => {
  switch (action.type) {
    case SET_PAGE:
      return action.payload;
=======
const pageReducer = (state = 0, action: ISetPage): number => {
  switch (action.type) {
    case SET_PAGE:
      return state + action.payload;
>>>>>>> styling
    default:
      return state;
  }
};

export default pageReducer;
