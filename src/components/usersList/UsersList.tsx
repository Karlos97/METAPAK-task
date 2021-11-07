import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Fragment } from 'react/cjs/react.production.min';
import classes from './UsersList.module.scss';
import User from './User/User';
import getUsersList from '../../helper/getData/getUsersList';
import { getAndAddUsersToUserList } from '../../store/actions/usersActions';
import {
  selectShowLoadingUsersListData,
  selectShowPage,
  selectUsersList,
} from '../../store/selectors/selectors';
import Spinner from '../UI/Spinner';
import { UserListItem } from '../../types/userType';
import { usersPerPage } from '../../config/config';
// import Spinner from '../UI/Spinner';
// import { getAndAddBooksToBookList } from '../../store/actions/booksActions';
// import {
//   selectShowBooksList,
//   selectShowLoadingBookDetailsData,
// } from '../../store/selectors/selectors';

const UsersList: React.FC = () => {
  const dispatch = useDispatch();

  // const loadingBookListDataSatus = useSelector(
  //   selectShowLoadingBookDetailsData
  // );
  const usersList: UserListItem[] = useSelector(selectUsersList);
  const loadingUsersListDataSatus = useSelector(selectShowLoadingUsersListData);
  const isUsersListNotEmpty = !usersList.length;
  // const since = useSelector(selectShowPage);
  const page = useSelector(selectShowPage);
  useEffect(() => {
    if (isUsersListNotEmpty) {
      dispatch(getAndAddUsersToUserList(page));
      console.log('dodaje');
    }
  }, [dispatch, isUsersListNotEmpty]);

  console.log(usersList);
  const usersListLayout = usersList?.map((user) => (
    <User userListItem={user} />
  ));

  return (
    <>
      <ul className={classes['users-list']}>
        {usersListLayout}
        <Spinner loading={loadingUsersListDataSatus} />
      </ul>
    </>
  );
};
export default UsersList;
