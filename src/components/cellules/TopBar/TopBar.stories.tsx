import React from "react";
import {action} from "@storybook/addon-actions";

import {storiesOf} from "@storybook/react";

import {TopBar} from "./TopBar";
import {Icon} from "../../atoms/Icon";

const stories = storiesOf("Cellules|TopBar", module);

stories.add("default", () => (
  <TopBar>
    <TopBar.Button position="left" onClick={action('onLeftClick')}><Icon title="Actualiser" icon="refresh"/></TopBar.Button>
    <TopBar.Brand><Icon icon="logo" title="NextTrains"/></TopBar.Brand>
    <TopBar.Button position="right" onClick={action('onRightClick')}><Icon title="Modifier" icon="edit"/></TopBar.Button>
  </TopBar>
));

stories.add("with title", () => (
  <TopBar>
    <TopBar.Brand>Choix des <b>villes</b></TopBar.Brand>
    <TopBar.Button position="right"><Icon title="Modifier" icon="save"/></TopBar.Button>
  </TopBar>
));

