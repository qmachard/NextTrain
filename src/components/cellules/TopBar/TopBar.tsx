import React from 'react';

import './TopBar.scss';

import {TopBarButton, TopBarButtonProps} from "./TopBarButton";
import {TopBarBrand, TopBarBrandProps} from "./TopBarBrand";

export type TopBarComponent = {
  Button: React.FC<TopBarButtonProps>,
  Brand: React.FC<TopBarBrandProps>,
} & React.FC<TopBarProps>;

export type TopBarProps = {};

const TopBar: TopBarComponent = ({children}) => {
  return <header className="top-bar">{children}</header>;
};

TopBar.Button = TopBarButton;
TopBar.Brand = TopBarBrand;

export {TopBar};
