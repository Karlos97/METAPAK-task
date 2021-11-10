import React from 'react';
<<<<<<< Updated upstream:src/components/usersList/UserCardTop/UserCardTop.jsx
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
=======
import Badge from '../Badge/Badge';
import GithubLogo from '../../../images/github/GitHub-Mark-32px.png';
import { UserListItem } from '../../../types/userType';
import UserImage from '../UserImage/UserImage';
import classes from './UserCardTop.module.scss';

interface IUserDetails {
  isUserDetails: boolean;
}

const UserCardTop: React.FC<UserListItem & IUserDetails> = ({
  login,
  id,
  html_url,
  avatar_url,
  isUserDetails,
}) => {
  const userCardTopStyle = isUserDetails
    ? classes['user-details-card-top']
    : classes['user-card-top'];
  const userCardTopDescriptionRank = isUserDetails
    ? classes['user-details-card-top-description-rank']
    : classes['user-card-top-description-rank'];
>>>>>>> Stashed changes:src/components/usersList/UserCardTop/UserCardTop.tsx

  return (
    <div className={userCardTopStyle}>
      <UserImage avatar_url={avatar_url} isUserDetails={isUserDetails} />
      <div className={classes['user-card-top-description']}>
        {isUserDetails ? (
          <h3
            className={`${classes['user-details-card-top-description-header-3']} ${classes['user-details-card-top-description-header-3']}`}
          >
            username
          </h3>
        ) : null}
        <p className={classes['user-card-top-description-login']}>{login}</p>
<<<<<<< Updated upstream:src/components/usersList/UserCardTop/UserCardTop.jsx
        <div className={classes['user-card-top-description-rank']}>
          {badge}
=======
        <div className={userCardTopDescriptionRank}>
          <Badge id={id} classes={classes} />
>>>>>>> Stashed changes:src/components/usersList/UserCardTop/UserCardTop.tsx
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
