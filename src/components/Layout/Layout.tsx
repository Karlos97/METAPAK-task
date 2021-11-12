import { useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header/Header';
import classes from './Layout.module.scss';
import {
  selectShowNotification,
  selectShowPage,
  selectShowUserDetailsFetchStatus,
  selectShowUserReposFetchStatus,
  selectShowUsersListFetchStatus,
} from '../../store/selectors/selectors';
import {
  appNamePathUsedInRouting,
  delayForNextFetch,
  delayForNotificationDismiss,
} from '../../config/config';
import { getAndAddUsersToUserList } from '../../store/actions/usersActions';
import Notification from '../UI/Notification/Notification';
import {
  setLoadingUserDetailsDataStatus,
  setLoadingUserReposDataStatus,
  setLoadingUsersListDataStatus,
} from '../../store/actions/notificationActions';

const pageHeightDivisorUsedToFetchNextDataBundle = 4;

const Layout: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const isMainpage = pathname === appNamePathUsedInRouting;

  const listInnerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const [fetchingUsers, setFetchingUsers] = useState(false);

  const page = useSelector(selectShowPage);
  const { status, title } = useSelector(selectShowNotification);
  const showUsersListNotification = useSelector(selectShowUsersListFetchStatus);
  const showUserDetailsNotification = useSelector(
    selectShowUserDetailsFetchStatus
  );
  const showUserReposNotification = useSelector(selectShowUserReposFetchStatus);
  const totalNotificationStatus =
    (isMainpage && showUsersListNotification) ||
    (showUserDetailsNotification && showUserReposNotification);

  const onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } =
      listInnerRef.current as HTMLDivElement;

    if (listInnerRef.current && isMainpage && !fetchingUsers) {
      const pageAtTheBottom =
        scrollTop + clientHeight >=
        scrollHeight -
          clientHeight / pageHeightDivisorUsedToFetchNextDataBundle;
      if (pageAtTheBottom) {
        setFetchingUsers(true);
        dispatch(getAndAddUsersToUserList(page));

        setTimeout(() => {
          setFetchingUsers(false);
        }, delayForNextFetch);
      }
    }
  };
  setTimeout(() => {
    dispatch(setLoadingUsersListDataStatus('IDLE'));
  }, delayForNotificationDismiss);
  if (showUserDetailsNotification || showUserReposNotification) {
    setTimeout(() => {
      dispatch(setLoadingUserDetailsDataStatus('IDLE'));
      dispatch(setLoadingUserReposDataStatus('IDLE'));
    }, delayForNotificationDismiss);
  }
  const mainElementClass = isMainpage
    ? classes['user-list']
    : classes['user-details'];

  return (
    <div className={classes.app} onScroll={onScroll} ref={listInnerRef}>
      <Header isMainpage={isMainpage} />
      {totalNotificationStatus && (
        <Notification status={status} title={title} />
      )}
      <main className={mainElementClass}>{children}</main>
    </div>
  );
};
export default Layout;
