import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './UserDetails.module.scss';
import getUserDetails from '../../../helper/getData/getUserDetails';
import {
  setLoadingUserDetailsDataStatus,
  setLoadingUserReposDataStatus,
  setNotification,
} from '../../../store/actions/notificationActions';
import UserCardTop from '../UserCardTop/UserCardTop';
import {
  selectShowLoadingUserDetailsData,
  selectShowLoadingUserReposData,
  selectShowUserDetailsFetchStatus,
} from '../../../store/selectors/selectors';
import { UserListItem } from '../../../types/userType';
import getUserRepos from '../../../helper/getData/getUserRepos';

interface IUserRepos {
  name: string;
}

const UserDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { userId } = useParams<{ userId: string }>();
  const loadingUserDetailsData = useSelector(selectShowLoadingUserDetailsData);
  const userDetailsFetchStatusFailed =
    useSelector(selectShowUserDetailsFetchStatus) === 'ERROR';
  const loadingUserReposData = useSelector(selectShowLoadingUserReposData);
  const history = useHistory();
  if (userDetailsFetchStatusFailed) {
    history.goBack();
  }

  const [userData, setUserData] = useState({
    login: '',
    name: '',
    id: 0,
    avatarUrl: '',
    githubUrl: '',
  });
  const [userRepos, setUserRepos] = useState<IUserRepos[]>([{ name: '' }]);

  const { login, name, id, avatar_url, html_url }: UserListItem = userData;

  useEffect(() => {
    dispatch(setLoadingUserDetailsDataStatus('ONGOING'));

    getUserDetails(userId)
      .then((user) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
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
    getUserRepos(userId).then((repos) => {
      setUserRepos(repos);
      dispatch(setLoadingUserReposDataStatus('FULFILLED'));
    });
    // .catch(() => {});
  }, [dispatch, userId]);
  const useReposLayout = userRepos?.map(({ name }, index) => (
    <li key={`repo-list-item${index}`}>
      <p className={classes['user-details-paragraph']}>{name}</p>
    </li>
  ));
  const userReposLength =
    userRepos?.length >= 30 ? ` Over 30` : ` ${userRepos?.length}`;
  return (
    <>
      {loadingUserDetailsData && <Spinner loading={loadingUserDetailsData} />}
      {!loadingUserDetailsData && (
        <div className={classes['user-details']}>
          <h2 className={classes['user-details-header-2']}>Profile </h2>

          <UserCardTop
            avatar_url={avatar_url}
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
              <ul>{useReposLayout}</ul>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserDetails;
