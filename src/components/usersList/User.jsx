import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.scss';
import userBasicImage from '../../images/about.svg';
import Button from '../UI/NavButton';
import setBadge from '../../helper/setBadge';
const User = ({ login, id, avatarUrl, githubUrl }) => {
  // const authorsLayout = authors?.reduce(
  //   (prev, next) => `${prev}, ${next}`,
  // );
  // The team badge is assinged based on following rules:

  // - If user ID is a multiple of 4 we want to assign a Team A badge,
  // - If user ID is a multiple of 6 we want to assign a Team B badge,
  // - If user ID is a multiple of both 4 and 6 we want to assign a Team C badge,
  // - In every other case there should be no badge assigned.
  let badge = setBadge(id, classes);

  return (
    <li className={classes.user} id={id}>
      <div className={classes['user-card-top']}>
        <img
          className={classes['user-card-top-image']}
          alt="User"
          src={avatarUrl}
        />

        <div className={classes['user-card-top-description']}>
          <p className={classes['user-card-top-description-login']}>{login}</p>
          <div>
            {badge}
            <p className={classes['user-card-top-description-id']}>ID: #{id}</p>
          </div>
          <a href={githubUrl} target="_blank">
            GitHub page
          </a>
        </div>
      </div>

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
