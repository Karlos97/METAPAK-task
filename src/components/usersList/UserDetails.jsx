import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Spinner from '../UI/Spinner';
import classes from './User.module.scss';

import getUserDetails from '../../helper/getData/getUserDetails';
import { setLoadingUserDetailsDataStatus } from '../../store/actions/usersActions';
import { setNotification } from '../../store/actions/notificationActions';
import setBadge from '../../helper/setBadge';

const UserDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const loadingUserDetailsData = useSelector(
    ({ usersOptions }) => usersOptions?.loadingUserDetailsData
  );
  const error = useSelector(
    ({ notification }) => notification.status !== 'error'
  );
  const history = useHistory();
  if (!error) {
    history.goBack();
  }

  const [userData, setUserData] = useState({
    login: '',
    name: '',
    id: '',
    avatarUrl: '',
    githubUrl: '',
  });

  const { userId } = params;

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
  }, [dispatch, userId]);

  let badge = setBadge(id, classes);

  return (
    <>
      <Spinner loading={loadingUserDetailsData} />
      {!loadingUserDetailsData && error && (
        <div className={classes['user-card-top']}>
          <img
            className={classes['user-card-top-image']}
            alt="User"
            src={avatarUrl}
          />

          <div className={classes['user-card-top-description']}>
            <p className={classes['user-card-top-description-login']}>
              {login}
            </p>
            <div>
              {badge}
              <p className={classes['user-card-top-description-id']}>
                ID: #{id}
              </p>
            </div>
            <a href={githubUrl} target="_blank">
              GitHub page
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
