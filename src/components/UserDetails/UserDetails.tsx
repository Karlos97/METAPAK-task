import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
import classes from './UserDetails.module.scss';
import getUserDetails from '../../helper/getData/getUserDetails';
import {
  setLoadingUserDetailsDataStatus,
  setLoadingUserReposDataStatus,
  setNotification,
} from '../../store/actions/notificationActions';
import UserCardTop from '../UserCardTop/UserCardTop';
import {
  selectShowLoadingUserDetailsData,
  selectShowLoadingUserReposData,
} from '../../store/selectors/selectors';
import { UserDetailsType, UserListItem } from '../../types/userType';
import getUserRepos from '../../helper/getData/getUserRepos';
import { defaultUserReposFetchAmount } from '../../config/config';
import defaultUserImage from '../../images/about.svg';

interface IUserRepos {
  name: string;
}

const UserDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { userId } = useParams<{ userId: string }>();

  const loadingUserDetailsData = useSelector(selectShowLoadingUserDetailsData);
  const loadingUserReposData = useSelector(selectShowLoadingUserReposData);

  const [userData, setUserData] = useState<UserDetailsType>({
    login: '',
    name: '',
    id: 0,
    avatar_url: '',
    html_url: '',
  });
  const [userRepos, setUserRepos] = useState<IUserRepos[]>([{ name: '' }]);

  const { login, id, avatar_url, html_url }: UserListItem = userData;

  const userReposLength =
    userRepos?.length >= defaultUserReposFetchAmount
      ? ` Over ${defaultUserReposFetchAmount}`
      : ` ${userRepos?.length}`;

  const userReposLayout = userRepos?.map(({ name }, index) => (
    <li key={`repo-list-item${index}`}>
      <p className={classes['user-details-paragraph']}>{name}</p>
    </li>
  ));

  useEffect(() => {
    dispatch(setLoadingUserDetailsDataStatus('ONGOING'));

    getUserDetails(userId)
      .then((user) => {
        setUserData(user);
        dispatch(
          setNotification({
            status: 'success',
            title: 'User details fetched.',
          })
        );
        dispatch(setLoadingUserDetailsDataStatus('FULFILLED'));
      })
      .catch(() => {
        dispatch(
          setNotification({
            status: 'error',
            title: 'Problem with fetching user details.',
          })
        );
        dispatch(setLoadingUserDetailsDataStatus('ERROR'));
      });
    dispatch(setLoadingUserReposDataStatus('ONGOING'));
    getUserRepos(userId)
      .then((repos) => {
        setUserRepos(repos);
        dispatch(setLoadingUserReposDataStatus('FULFILLED'));
      })
      .catch(() => {
        dispatch(
          setNotification({
            status: 'error',
            title: 'Problem with fetching user details.',
          })
        );
        dispatch(setLoadingUserReposDataStatus('ERROR'));
      });
  }, [dispatch, userId]);

  return (
    <>
      {loadingUserDetailsData && <Spinner loading={loadingUserDetailsData} />}
      {!loadingUserDetailsData && (
        <div className={classes['user-details']}>
          <h2 className={classes['user-details-header-2']}>Profile </h2>

          <UserCardTop
            avatar_url={avatar_url ? avatar_url : defaultUserImage}
            login={login}
            id={id}
            html_url={html_url}
            isUserDetails={true}
          />
          <h2 className={classes['user-details-header-2']}>Repositories</h2>
          {loadingUserReposData && <Spinner loading={loadingUserReposData} />}

          {!loadingUserReposData && (
            <>
              <h3 className={classes['user-details-header-3']}>
                Repositories count:
                <span className={classes['user-details-paragraph']}>
                  {userReposLength}
                </span>
              </h3>
              <h3 className={classes['user-details-header-3']}>
                Repositories list:
              </h3>
              {userReposLayout.length ? <ul>{userReposLayout}</ul> : null}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserDetails;
