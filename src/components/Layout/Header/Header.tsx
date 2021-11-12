import React from 'react';
import classes from './Header.module.scss';
import GithubLogo from '../../../images/github/GitHub-Mark-32px.png';
import NavButton from '../../UI/NavButton/NavButton';
import { appNamePathUsedInRouting } from '../../../config/config';

const Header: React.FC<{ isMainpage: boolean }> = ({ isMainpage }) => (
  <header className={classes['app-header']}>
    <h1 className={classes['app-header-1']}>
      This is recruitment task for Metapack company.
    </h1>
    <div className={classes['app-header-block']}>
      {!isMainpage && (
        <NavButton
          buttonClass={classes['back-button']}
          destinationPath={appNamePathUsedInRouting}
        >
          Back
        </NavButton>
      )}
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
