import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< Updated upstream:src/components/usersList/UsersList.jsx
import { Fragment } from 'react/cjs/react.production.min';
=======
>>>>>>> Stashed changes:src/components/usersList/UsersList.tsx
import classes from './UsersList.module.scss';
import User from './User/User';
import { getAndAddUsersToUserList } from '../../store/actions/usersActions';
import {
  selectShowLoadingUsersListData,
  selectShowUsersList,
} from '../../store/selectors/selectors';
<<<<<<< Updated upstream:src/components/usersList/UsersList.jsx
import Spinner from '../UI/Spinner';
// import Spinner from '../UI/Spinner';
// import { getAndAddBooksToBookList } from '../../store/actions/booksActions';
// import {
//   selectShowBooksList,
//   selectShowLoadingBookDetailsData,
// } from '../../store/selectors/selectors';
=======
import Spinner from '../UI/Spinner/Spinner';
import { UserListItem } from '../../types/userType';
>>>>>>> Stashed changes:src/components/usersList/UsersList.tsx

const UsersList = () => {
  const dispatch = useDispatch();
<<<<<<< Updated upstream:src/components/usersList/UsersList.jsx

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
=======
  const usersList: UserListItem[] = useSelector(selectUsersList);
  const loadingUsersListDataSatus = useSelector(selectShowLoadingUsersListData);
  const isUsersListNotEmpty = !usersList.length;
  const page = useSelector(selectShowPage);
  useEffect(() => {
    // if (isUsersListNotEmpty) {
    dispatch(getAndAddUsersToUserList(0));
    console.log('dodaje');
    // }
  }, [dispatch, isUsersListNotEmpty]);

  console.log(usersList);
  const usersListLayout = usersList?.map((user) => (
    <User userListItem={user} key={user.id} />
>>>>>>> Stashed changes:src/components/usersList/UsersList.tsx
  ));

  // login: user.login,
  // id: user.id,
  // avatarUrl: user.avatar_url,
  // githubUrl: user.html_url,

  console.log(usersListLayout);
  return (
<<<<<<< Updated upstream:src/components/usersList/UsersList.jsx
    <Fragment>
      <ul className={classes['users-list']}>
        {usersListLayout}
        <Spinner loading={loadingUsersListDataSatus} />
      </ul>
    </Fragment>
=======
    <ul className={classes['users-list']}>
      {usersListLayout}
      <Spinner loading={loadingUsersListDataSatus} />
    </ul>
>>>>>>> Stashed changes:src/components/usersList/UsersList.tsx
  );
};
export default UsersList;
