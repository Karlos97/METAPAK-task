import React from 'react';
import classes from './User.module.scss';
<<<<<<< Updated upstream:src/components/usersList/User/User.jsx
import userBasicImage from '../../../images/about.svg';
import Button from '../../UI/NavButton';
import setBadge from '../../../helper/setBadge';
import GithubLogo from '../../../images/github/GitHub-Mark-32px.png';
=======
import NavButton from '../../UI/NavButton/NavButton';
>>>>>>> Stashed changes:src/components/usersList/User/User.tsx
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
<<<<<<< Updated upstream:src/components/usersList/User/User.jsx
        githubUrl={githubUrl}
=======
        html_url={html_url}
        isUserDetails={false}
>>>>>>> Stashed changes:src/components/usersList/User/User.tsx
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
