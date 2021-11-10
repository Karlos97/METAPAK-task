import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './UserDetails.module.scss';
import getUserDetails from '../../../helper/getData/getUserDetails';
import { setLoadingUserDetailsDataStatus } from '../../../store/actions/usersActions';
import { setNotification } from '../../../store/actions/notificationActions';
import setBadge from '../../../helper/setBadge';
import UserCardTop from '../UserCardTop/UserCardTop';
<<<<<<< Updated upstream:src/components/usersList/UserDetails/UserDetails.jsx
=======
import {
  selectShowLoadingUserDetailsData,
  selectShowUserDetailsFetchStatus,
} from '../../../store/selectors/selectors';
import { UserListItem } from '../../../types/userType';
import getUserRepos from '../../../helper/getData/getUserRepos';
>>>>>>> Stashed changes:src/components/usersList/UserDetails/UserDetails.tsx

const UserDetails = () => {
  const dispatch = useDispatch();
<<<<<<< Updated upstream:src/components/usersList/UserDetails/UserDetails.jsx
  const params = useParams();

  const loadingUserDetailsData = useSelector(
    ({ usersOptions }) => usersOptions?.loadingUserDetailsData
  );
  const error = useSelector(
    ({ notification }) => notification.status !== 'error'
  );
=======
  const { userId } = useParams<{ userId: string }>();
  const loadingUserDetailsData = useSelector(selectShowLoadingUserDetailsData);
  const userDetailsFetchStatusFailed =
    useSelector(selectShowUserDetailsFetchStatus) === 'ERROR';
>>>>>>> Stashed changes:src/components/usersList/UserDetails/UserDetails.tsx
  const history = useHistory();
  if (userDetailsFetchStatusFailed) {
    history.goBack();
  }

  const [userData, setUserData] = useState({
    login: '',
    name: '',
    id: '',
    avatarUrl: '',
    githubUrl: '',
  });
<<<<<<< Updated upstream:src/components/usersList/UserDetails/UserDetails.jsx

  const { userId } = params;
=======
  const [userRepos, setUserRepos] = useState({
    name: '',
  });
>>>>>>> Stashed changes:src/components/usersList/UserDetails/UserDetails.tsx

  const { login, name, id, avatarUrl, githubUrl } = userData;

  useEffect(() => {
    dispatch(setLoadingUserDetailsDataStatus(true));

    getUserDetails(userId)
      .then((user) => {
        setUserData(user);
        dispatch(
          setNotification({
            isActive: true,
            status: 'success',
            title: 'User details fetched.',
          })
        );
        dispatch(setLoadingUserDetailsDataStatus(false));
      })
      .catch(() => {
        dispatch(
          setNotification({
            isActive: true,
            status: 'error',
            title: 'Problem with fetching user details.',
          })
        );
        dispatch(setLoadingUserDetailsDataStatus(false));
      });
    getUserRepos(userId).then((repos) => {
      console.log(repos);
      // setUserRepos(repos);
    });
    // .catch(() => {});
  }, [dispatch, userId]);
  console.log(userRepos);
  return (
    <>
      <Spinner loading={loadingUserDetailsData} />
      {!loadingUserDetailsData && (
        <div className={classes['user-details']}>
          <h2 className={classes['user-details-header-2']}>Profile </h2>

          <UserCardTop
            avatarUrl={avatarUrl}
            login={login}
            id={id}
<<<<<<< Updated upstream:src/components/usersList/UserDetails/UserDetails.jsx
            githubUrl={githubUrl}
=======
            html_url={html_url}
            isUserDetails={true}
>>>>>>> Stashed changes:src/components/usersList/UserDetails/UserDetails.tsx
          />

          <h2 className={classes['user-details-header-2']}>Repositories</h2>
          <h3 className={classes['user-details-header-3']}>
            Repositories count:{' '}
            <span className={classes['user-details-paragraph']}>test 1</span>
          </h3>
          <h3 className={classes['user-details-header-3']}>
            Repositories list:{' '}
            <span className={classes['user-details-paragraph']}>test 1</span>
          </h3>
          <ul>
            <li>
              <p className={classes['user-details-paragraph']}>test 1</p>
            </li>
            <li>
              <p className={classes['user-details-paragraph']}>test 1</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default UserDetails;
