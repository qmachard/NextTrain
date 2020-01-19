import React from 'react';
import classNames from 'classnames';

import icons from '../../../assets/icons.svg';
import './Icon.scss';

export type IconProps = {
  icon: string;
  title: string;
  className?: string;
};

export const Icon = ({ icon, title, className }: IconProps) => {
  const componentClassName = classNames('icon', `icon-${icon}`, className);

  return (
    <i className={componentClassName} title={title}>
      <svg className="icon_svg">
        <use xlinkHref={`${icons}#${icon}`} />
      </svg>
    </i>
  );
};
