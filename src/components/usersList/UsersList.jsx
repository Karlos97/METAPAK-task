import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react/cjs/react.production.min';
import classes from './UsersList.module.scss';
import User from './User/User';
import getUsersList from '../../helper/getData/getUsersList';
import { getAndAddUsersToUserList } from '../../store/actions/usersActions';
import {
  selectShowLoadingUsersListData,
  selectShowUsersList,
} from '../../store/selectors/selectors';
import Spinner from '../UI/Spinner';
// import Spinner from '../UI/Spinner';
// import { getAndAddBooksToBookList } from '../../store/actions/booksActions';
// import {
//   selectShowBooksList,
//   selectShowLoadingBookDetailsData,
// } from '../../store/selectors/selectors';

const UsersList = () => {
  const dispatch = useDispatch();

  // const loadingBookListDataSatus = useSelector(
  //   selectShowLoadingBookDetailsData
  // );
  const usersList = useSelector(selectShowUsersList);
  const loadingUsersListDataSatus = useSelector(selectShowLoadingUsersListData);

  useEffect(() => {
    if (!usersList) {
      dispatch(getAndAddUsersToUserList());
      console.log('dodaje');
    }
  }, [dispatch, usersList]);

  console.log(usersList);
  const usersListLayout = usersList?.map((user) => (
    <User
      login={user.login}
      id={user.id}
      key={user.id}
      avatarUrl={user.avatarUrl}
      githubUrl={user.githubUrl}
    />
  ));

  // login: user.login,
  // id: user.id,
  // avatarUrl: user.avatar_url,
  // githubUrl: user.html_url,

  console.log(usersListLayout);
  return (
    <Fragment>
      <ul className={classes['users-list']}>
        {usersListLayout}
        <Spinner loading={loadingUsersListDataSatus} />
      </ul>
    </Fragment>
  );
};
export default UsersList;
