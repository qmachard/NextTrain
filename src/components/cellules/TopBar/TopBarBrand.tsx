import React from 'react';

import './TopBarBrand.scss';

export type TopBarBrandProps = {};

export const TopBarBrand: React.FC<TopBarBrandProps> = ({children}) => {
  return <h1 className="top-bar-brand">{children}</h1>;
};
