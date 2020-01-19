import React from "react";
import dayjs from "dayjs";

import { storiesOf } from "@storybook/react";

import { Time } from "./Time";

const stories = storiesOf("Atoms|Time", module);

stories.add("default", () => (
  <Time
    departureTime={dayjs().add(2, "hour")}
    arrivalTime={dayjs().add(3, "hour")}
  />
));

stories.add("+ warning", () => (
  <Time
    departureTime={dayjs().add(2, "hour")}
    arrivalTime={dayjs().add(3, "hour")}
    warning
  />
));
