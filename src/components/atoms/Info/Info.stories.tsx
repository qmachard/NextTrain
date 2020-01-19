import React from "react";

import { storiesOf } from "@storybook/react";

import { Info } from "./Info";

const stories = storiesOf("Atoms|Info", module);

stories.add("default", () => (
  <Info label="durée">
    32 mn
  </Info>
));

stories.add("+ big", () => (
  <Info label="durée" big>
    32 mn
  </Info>
));
