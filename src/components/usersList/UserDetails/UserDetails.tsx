import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Spinner from '../../UI/Spinner';
import classes from './UserDetails.module.scss';

import getUserDetails from '../../../helper/getData/getUserDetails';
import { setLoadingUserDetailsDataStatus } from '../../../store/actions/notificationActions';
import UserCardTop from '../UserCardTop/UserCardTop';
import {
  selectIsError,
  selectShowLoadingUserDetailsData,
} from '../../../store/selectors/selectors';
import { UserListItem } from '../../../types/userType';

const UserDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { userId } = useParams<{ userId: string }>();
  // console.log(params);
  const loadingUserDetailsData = useSelector(selectShowLoadingUserDetailsData);
  const error = useSelector(selectIsError);
  const history = useHistory();
  if (!error) {
    history.goBack();
  }

  const [userData, setUserData] = useState({
    login: '',
    name: '',
    id: 0,
    avatarUrl: '',
    githubUrl: '',
  });

  // const { userId } = params;

  const { login, name, id, avatar_url, html_url }: UserListItem = userData;

  useEffect(() => {
    dispatch(setLoadingUserDetailsDataStatus('ONGOING'));

    getUserDetails(userId)
      .then((user) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        setUserData(user);
        // dispatch(
        //   setNotification({
        //     // isActive: true,
        //     status: 'success',
        //     title: 'User details fetched.',
        //   })
        // );
        dispatch(setLoadingUserDetailsDataStatus('FULFILLED'));
      })
      .catch(() => {
        // dispatch(
        //   setNotification({
        //     isActive: true,
        //     status: 'error',
        //     title: 'Problem with fetching user details.',
        //   })
        // );
        dispatch(setLoadingUserDetailsDataStatus('ERROR'));
      });
  }, [dispatch, userId]);
  {
    /* <div className={classes['user-card-top']}>
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
        </div>*/
  }
  // let badge = setBadge(id, classes);

  return (
    <>
      <Spinner loading={loadingUserDetailsData} />
      {!loadingUserDetailsData && error && (
        <div className={classes['user-details']}>
          <h2>Profile </h2>
          <UserCardTop
            avatar_url={avatar_url}
            login={login}
            id={id}
            html_url={html_url}
          />

          <h2>Repositories</h2>
          <p>Repositories count:</p>
          <p>Repositories list:</p>
          <ul>
            <li>test 1</li>
            <li>test 1</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default UserDetails;
