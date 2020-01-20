import React, {DetailedHTMLProps} from 'react';
import classNames from "classnames";

import './TopBarButton.scss';

export type TopBarButtonProps = {
  position: 'left' | 'right',
} & DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const TopBarButton: React.FC<TopBarButtonProps> = ({ position, className, children, ...otherProps }) => {
  const componentClassName = classNames('top-bar-button', className, {
    'top-bar-button--right': 'right' === position,
  });

  return <button className={componentClassName} {...otherProps}>{children}</button>;
};

