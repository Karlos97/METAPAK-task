import React from 'react';
import Badge from '../UsersList/Badge/Badge';
import classes from './UserCardTop.module.scss';
import { UserListItem } from '../../types/userType';
import UserImage from '../UsersList/UserImage/UserImage';
import GithubLogo from '../../images/github/GitHub-Mark-32px.png';

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
        <div className={userCardTopDescriptionRank}>
          <Badge id={id} classes={classes} />
          <p className={classes['user-card-top-description-rank-id']}>
            ID: #{id}
          </p>
        </div>
        <a
          href={html_url}
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
