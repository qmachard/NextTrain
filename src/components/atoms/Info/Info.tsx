import React from 'react';
import classNames from "classnames";

import './Info.scss';

import {Icon} from "../Icon";

export type InfoProps = {
  label: string,
  icon?: string,
  className?: string,
  big?: boolean,
  warning?: boolean,
};

const Info: React.FC<InfoProps> = ({label, icon, children, big, warning, className}) => {
  const componentClassName = classNames('info', className, {
    'info--big': big,
    'info--warning': warning,
  });

  return <span className={componentClassName}>
    { icon ? (
      <Icon className="info_icon" title={label} icon={icon} />
    ) : (
      <span className="info_label">{label}</span>
    )}

    <span className="info_value">{children}</span>
  </span>
};

Info.defaultProps = {
  big: false,
};

export { Info };

