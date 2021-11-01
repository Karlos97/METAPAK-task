import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.scss';
import userBasicImage from '../../../images/about.svg';
import Button from '../../UI/NavButton';
import setBadge from '../../../helper/setBadge';
import GithubLogo from '../../../images/github/GitHub-Mark-32px.png';
import UserCardTop from '../UserCardTop/UserCardTop';

const User = ({ login, id, avatarUrl, githubUrl }) => {
  // const authorsLayout = authors?.reduce(
  //   (prev, next) => `${prev}, ${next}`,
  // );

  return (
    <li className={classes.user} id={id}>
      <UserCardTop
        avatarUrl={avatarUrl}
        login={login}
        id={id}
        githubUrl={githubUrl}
      />

      <div className={classes['user-footer']}>
        <Button
          destinationPath={`/user/${login}`}
          buttonClass={classes['user-footer-button']}
        >
          Details
        </Button>
      </div>
    </li>
  );
};

export default User;
