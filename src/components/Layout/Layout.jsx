import { useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header/Header';
import classes from './Layout.module.scss';
<<<<<<< Updated upstream:src/components/Layout/Layout.jsx
// import Notification from '../UI/Notification';
// import { delayForNextFetechBookList } from '../../config/config';
// import {
//   selectShowNotification,
//   selectShowStartIndex,
// } from '../../store/selectors/selectors';
=======
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
>>>>>>> Stashed changes:src/components/Layout/Layout.tsx

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const isMainpage = pathname === '/';
<<<<<<< Updated upstream:src/components/Layout/Layout.jsx

  // const listInnerRef = useRef();
  // const dispatch = useDispatch();

  // const [fetchingBooks, setFetchingBooks] = useState(false);

  // const { isActive, status, title } = useSelector(selectShowNotification);
  // const startIndex = useSelector(selectShowStartIndex);

  // const onScroll = () => {
  //   const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

  //   if (listInnerRef.current) {
  //     const pageAtTheBottom =
  //       scrollTop + clientHeight >= scrollHeight - clientHeight / 4;
  //     if (pageAtTheBottom && isMainpage && !fetchingBooks) {
  //       setFetchingBooks(true);
  //       dispatch(getAndAddBooksToBookList('fiction', startIndex));
  //       dispatch(incrementStartIndex());

  //       setTimeout(() => {
  //         setFetchingBooks(false);
  //       }, delayForNextFetechBookList);
  //     }
  //   }
  // };
=======
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
>>>>>>> Stashed changes:src/components/Layout/Layout.tsx

  const mainElementClass = isMainpage
    ? classes['user-list']
    : classes['user-details'];

  return (
    <>
      <div className={classes.app}>
        <Header isMainpage={isMainpage} />
        {showNotification && <Notification status={status} title={title} />}
        <main className={mainElementClass}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
