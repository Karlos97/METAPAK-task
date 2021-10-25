import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.scss';
import userBasicImage from '../../images/about.svg';
import Button from '../UI/NavButton';
const User = ({
  title,
  subtitle,
  authors,
  publishedDate,
  description,
  smallThumbnail,
  id,
}) => {
  // const authorsLayout = authors?.reduce(
  //   (prev, next) => `${prev}, ${next}`,
  // );

  return (
    <li className={classes.user}>
      <div className={classes['user-card-top']}>
        <img
          className={classes['user-card-top-image']}
          alt="User"
          src={userBasicImage}
        />

        <div className={classes['user-card-top-description']}>
          <p className={classes['user-card-top-description-login']}>
            @userlogin
          </p>
          <div>
            <span className={classes['user-card-top-description-badge']}>
              Team A
            </span>
            <p className={classes['user-card-top-description-id']}>ID: #2</p>
          </div>
          <a>GitHub page</a>
        </div>
      </div>

      <div className={classes['user-footer']}>
        <Button
          destinationPath={`/user/${id}`}
          buttonClass={classes['user-footer-button']}
        >
          Details
        </Button>
      </div>
    </li>
  );
};

export default User;
