import React from 'react';
import setBadge from '../../../helper/setBadge';
import GithubLogo from '../../../images/github/GitHub-Mark-32px.png';
import classes from './UserCardTop.module.scss';

const UserCardTop = ({ avatarUrl, login, id, githubUrl }) => {
  // The team badge is assinged based on following rules:

  // - If user ID is a multiple of 4 we want to assign a Team A badge,
  // - If user ID is a multiple of 6 we want to assign a Team B badge,
  // - If user ID is a multiple of both 4 and 6 we want to assign a Team C badge,
  // - In every other case there should be no badge assigned.
  let badge = setBadge(id, classes);

  return (
    <div className={classes['user-card-top']}>
      <img
        className={classes['user-card-top-image']}
        alt="User"
        src={avatarUrl}
      />

      <div className={classes['user-card-top-description']}>
        <p className={classes['user-card-top-description-login']}>{login}</p>
        <div className={classes['user-card-top-description-rank']}>
          {badge}
          <p className={classes['user-card-top-description-rank-id']}>
            ID: #{id}
          </p>
        </div>

        <a
          href={githubUrl}
          target="_blank"
          className={classes['user-card-top-description-page']}
        >
          <img
            src={GithubLogo}
            alt="Github logo"
            className={classes['user-card-top-description-image']}
          />
          <span>GitHub page</span>
        </a>
      </div>
    </div>
  );
};
export default UserCardTop;
