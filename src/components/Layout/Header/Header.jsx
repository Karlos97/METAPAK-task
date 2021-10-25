import React from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Header.module.scss';
import MetapackLogo from '../../../images/logo_pl.svg';
import GithubLogo from '../../../images/github/GitHub-Mark-32px.png';
import Button from '../../UI/NavButton';

const Header = ({ isMainpage }) => (
  <header className={classes['app-header']}>
    <h2>This is recruitment task for Metapack company.</h2>
    {/* <img
        src={MetapackLogo}
        alt="Metapack logo"
        className={classes['app-header-block-company-logo']}
      /> */}
    {/* <div className={classes['app-header-block-app-logo']}> */}
    <div className={classes['app-header-block']}>
      <Button buttonClass={classes['back-button']} destinationPath="/">
        Back
      </Button>
      <div className={classes['app-header-block-app-logo']}>
        <img
          src={GithubLogo}
          alt="Github logo"
          className={classes['app-header-block-app-logo-image']}
        />
        <span className={classes['app-header-block-app-logo-text']}>
          GitHub users
        </span>
        {/* {!isMainpage && <MainNavigation />} */}

        {/* </div> */}
      </div>
    </div>
  </header>
);
export default Header;
