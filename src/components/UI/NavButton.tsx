import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';
interface Props {
  destinationPath: string;
  // children?: JSX.Element;
  buttonClass: string | { [key: string]: string }; //potwierdzi czy to jest dobry zwyczaj
}
const NavButton: React.FC<Props> = ({
  destinationPath,
  buttonClass,
  children,
}) => (
  <>
    <NavLink
      to={destinationPath}
      activeClassName={
        typeof buttonClass === 'object' ? buttonClass.active : ''
      }
      className={typeof buttonClass === 'object' ? '' : buttonClass}
    >
      <span>{children}</span>
    </NavLink>
  </>
);

export default NavButton;
