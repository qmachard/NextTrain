import React from 'react';

import './Button.scss';

export type ButtonProps = {};

export const Button: React.FC<ButtonProps> = ({children}) => (
  <button className="button">{children}</button>
);
