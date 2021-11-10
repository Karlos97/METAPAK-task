import { ISetPage } from '../action-types/pageActionType';
import { SET_PAGE } from './actionsType';

export const setPage = (payload: number): ISetPage => ({
  type: SET_PAGE,
  payload,
});
