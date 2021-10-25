import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';

const NavButton = ({ destinationPath, buttonClass, children }) => (
  <>
    <NavLink
      to={destinationPath}
      activeClassName={buttonClass.active}
      className={buttonClass}
    >
      <span>{children}</span>
    </NavLink>
  </>
);

export default NavButton;
