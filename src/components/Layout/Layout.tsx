import { useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header/Header';
import classes from './Layout.module.scss';
import {
  selectShowNotification,
  selectShowPage,
  selectShowUsersListFetchStatus,
} from '../../store/selectors/selectors';
import {
  delayForNextFetch,
  delayForNotificationDismiss,
} from '../../config/config';
import { getAndAddUsersToUserList } from '../../store/actions/usersActions';
import Notification from '../UI/Notification/Notification';
import { setLoadingUsersListDataStatus } from '../../store/actions/notificationActions';

const Layout: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const isMainpage = pathname === '/';
  const listInnerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [fetchingUsers, setFetchingUsers] = useState(false);
  const { status, title } = useSelector(selectShowNotification);
  const page = useSelector(selectShowPage);
  console.log(page);
  const showNotification =
    useSelector(selectShowUsersListFetchStatus) === ('FULFILLED' || 'ERROR');

  const onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } =
      listInnerRef.current as HTMLDivElement;

    if (listInnerRef.current) {
      const pageAtTheBottom =
        scrollTop + clientHeight >= scrollHeight - clientHeight / 4;
      if (pageAtTheBottom && isMainpage && !fetchingUsers) {
        setFetchingUsers(true);
        dispatch(getAndAddUsersToUserList(page));

        setTimeout(() => {
          setFetchingUsers(false);
        }, delayForNextFetch);
      }
    }
  };
  if (showNotification) {
    setTimeout(() => {
      dispatch(setLoadingUsersListDataStatus('IDLE'));
    }, delayForNotificationDismiss);
  }

  const mainElementClass = isMainpage
    ? classes['user-list']
    : classes['user-details'];

  return (
    <>
      <div className={classes.app} onScroll={onScroll} ref={listInnerRef}>
        <Header isMainpage={isMainpage} />
        {showNotification && <Notification status={status} title={title} />}
        <main className={mainElementClass}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
