import React from 'react';
import classes from './User.module.scss';
import NavButton from '../../UI/NavButton/NavButton';
import UserCardTop from '../UserCardTop/UserCardTop';
import { UserListItem } from '../../../types/userType';

export interface IUserProps {
  userListItem: UserListItem;
}

const User: React.FC<IUserProps> = ({ userListItem }) => {
  const { id, login, html_url, avatar_url } = userListItem;
  return (
    <li className={classes.user} id={id.toString()}>
      <UserCardTop
        avatar_url={avatar_url}
        login={login}
        id={id}
        html_url={html_url}
        isUserDetails={false}
      />

      <div className={classes['user-footer']}>
        <NavButton
          destinationPath={`/user/${login}`}
          buttonClass={classes['user-footer-button']}
        >
          Details
        </NavButton>
      </div>
    </li>
  );
};

export default User;
