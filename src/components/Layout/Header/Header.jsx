import React from 'react';
import classes from './Header.module.scss';
import GithubLogo from '../../../images/github/GitHub-Mark-32px.png';
<<<<<<< Updated upstream:src/components/Layout/Header/Header.jsx
import Button from '../../UI/NavButton';
=======
import NavButton from '../../UI/NavButton/NavButton';
>>>>>>> Stashed changes:src/components/Layout/Header/Header.tsx

const Header = ({ isMainpage }) => (
  <header className={classes['app-header']}>
    <h1 className={classes['app-header-1']}>
      This is recruitment task for Metapack company.
    </h1>
    <div className={classes['app-header-block']}>
<<<<<<< Updated upstream:src/components/Layout/Header/Header.jsx
      <Button buttonClass={classes['back-button']} destinationPath="/">
        Back
      </Button>
=======
      {!isMainpage && (
        <NavButton buttonClass={classes['back-button']} destinationPath="/">
          Back
        </NavButton>
      )}
>>>>>>> Stashed changes:src/components/Layout/Header/Header.tsx
      <div className={classes['app-header-block-app-logo']}>
        <img
          src={GithubLogo}
          alt="Github logo"
          className={classes['app-header-block-app-logo-image']}
        />
        <span className={classes['app-header-block-app-logo-text']}>
          GitHub users
        </span>
      </div>
    </div>
  </header>
);
export default Header;
