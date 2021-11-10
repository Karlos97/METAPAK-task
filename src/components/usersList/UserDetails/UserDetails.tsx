import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './UserDetails.module.scss';
import getUserDetails from '../../../helper/getData/getUserDetails';
import { setLoadingUserDetailsDataStatus } from '../../../store/actions/notificationActions';
import UserCardTop from '../UserCardTop/UserCardTop';
import {
  selectShowLoadingUserDetailsData,
  selectShowUserDetailsFetchStatus,
} from '../../../store/selectors/selectors';
import { UserListItem } from '../../../types/userType';
import getUserRepos from '../../../helper/getData/getUserRepos';

const UserDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { userId } = useParams<{ userId: string }>();
  const loadingUserDetailsData = useSelector(selectShowLoadingUserDetailsData);
  const userDetailsFetchStatusFailed =
    useSelector(selectShowUserDetailsFetchStatus) === 'ERROR';
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
  const [userRepos, setUserRepos] = useState({
    name: '',
  });

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
    getUserRepos(userId).then((repos) => {
      console.log(repos);
      // setUserRepos(repos);
    });
    // .catch(() => {});
  }, [dispatch, userId]);
  console.log(userRepos);
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
