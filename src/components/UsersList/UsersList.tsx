import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './UsersList.module.scss';
import User from './User/User';
import { getAndAddUsersToUserList } from '../../store/actions/usersActions';
import {
  selectShowLoadingUsersListData,
  selectUsersList,
} from '../../store/selectors/selectors';
import Spinner from '../UI/Spinner/Spinner';
import { UserListItem } from '../../types/userType';

const UsersList: React.FC = () => {
  const dispatch = useDispatch();
  const usersList: UserListItem[] = useSelector(selectUsersList);
  const loadingUsersListDataSatus = useSelector(selectShowLoadingUsersListData);
  const isUsersListNotEmpty = !usersList.length;
  useEffect(() => {
    dispatch(getAndAddUsersToUserList());
  }, [dispatch, isUsersListNotEmpty]);

  const usersListLayout = usersList?.map((user) => (
    <User userListItem={user} key={user.id} />
  ));

  return (
    <ul className={classes['users-list']}>
      {usersListLayout}
      <Spinner loading={loadingUsersListDataSatus} />
    </ul>
  );
};
export default UsersList;
