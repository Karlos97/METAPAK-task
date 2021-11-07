import { useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header/Header';
// import {
//   getAndAddBooksToBookList,
//   incrementStartIndex,
// } from '../../store/actions/booksActions';
// import MainNavigation from './MainNavigation';
import classes from './Layout.module.scss';
import { selectShowPage } from '../../store/selectors/selectors';
import { delayForNextFetch } from '../../config/config';
// import Notification from '../UI/Notification';
// import { delayForNextFetechBookList } from '../../config/config';
// import {
//   selectShowNotification,
//   selectShowStartIndex,
// } from '../../store/selectors/selectors';

const Layout: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const isMainpage = pathname === '/';

  interface IListInnerRefType {
    scrollTop?: number;
    scrollHeight?: number;
    clientHeight?: number;
  }
  const listInnerRef = useRef();
  const dispatch = useDispatch();

  const [fetchingBooks, setFetchingBooks] = useState(false);

  // const { isActive, status, title } = useSelector(selectShowNotification);
  const page = useSelector(selectShowPage);

  const onScroll: IListInnerRefType = () => {
    const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

    if (listInnerRef.current) {
      const pageAtTheBottom =
        scrollTop + clientHeight >= scrollHeight - clientHeight / 4;
      if (pageAtTheBottom && isMainpage && !fetchingBooks) {
        setFetchingBooks(true);
        // dispatch(getAndAddBooksToBookList('fiction', page));
        // dispatch(incrementStartIndex());

        setTimeout(() => {
          setFetchingBooks(false);
        }, delayForNextFetch);
      }
    }
  };

  const mainElementClass = !isMainpage
    ? classes['users-list']
    : classes['user-details'];

  return (
    <>
      <div className={classes.app} onScroll={onScroll} ref={listInnerRef}>
        <Header isMainpage={isMainpage} />
        {/* {isActive && <Notification status={status} title={title} />} */}
        <main className={mainElementClass}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
