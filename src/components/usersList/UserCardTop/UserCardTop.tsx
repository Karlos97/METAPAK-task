import React from 'react';
import { useSelector } from 'react-redux';
import Badge from '../../../helper/Badge';
import GithubLogo from '../../../images/github/GitHub-Mark-32px.png';
import { selectUsersList } from '../../../store/selectors/selectors';
import { UserListItem } from '../../../types/userType';
import classes from './UserCardTop.module.scss';

// interface IUserCardTopProps {
//   id: number;
// }

const UserCardTop: React.FC<UserListItem> = ({
  login,
  id,
  html_url,
  avatar_url,
}) => {
  // The team badge is assinged based on following rules:
  // - If user ID is a multiple of 4 we want to assign a Team A badge,
  // - If user ID is a multiple of 6 we want to assign a Team B badge,
  // - If user ID is a multiple of both 4 and 6 we want to assign a Team C badge,
  // - In every other case there should be no badge assigned.
  // const setBadge: React.FC<Props> = ({ id, classes }: Props) => {
  const test: UserListItem[] = useSelector(selectUsersList);
  console.log('user details', test);
  return (
    <div className={classes['user-card-top']}>
      <img
        className={classes['user-card-top-image']}
        alt="User"
        src={avatar_url}
      />

      <div className={classes['user-card-top-description']}>
        <p className={classes['user-card-top-description-login']}>{login}</p>
        <div className={classes['user-card-top-description-rank']}>
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
