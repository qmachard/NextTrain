import React from 'react';
import classNames from "classnames";

import './Info.scss';

export type InfoProps = {
  label: string,
  className?: string,
  big?: boolean,
};

const Info: React.FC<InfoProps> = ({label, children, big, className}) => {
  const componentClassName = classNames('info', className, {
    'info--big': big,
  });

  return <span className={componentClassName}>
    <span className="info_label">{label}</span>
    <span className="info_value">{children}</span>
  </span>
};

Info.defaultProps = {
  big: false,
};

export { Info };

