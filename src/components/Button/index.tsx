import * as React from 'react';

import './button.css';
export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> =
  // export const Button: React.FC<{
  //   buttonClass: string | { [key: string]: string };
  // }> =
  // ({ children, ...props }) => <button {...props}>{children}</button>;
  // ({ children, buttonClass }) => (
  // <button className={buttonClass}>{children}</button>
  ({ children, ...props }) => <button {...props}>{children}</button>;
