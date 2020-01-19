import React from "react";
import dayjs from "dayjs";

import { storiesOf } from "@storybook/react";

import { TripCard } from "./TripCard";

const stories = storiesOf("Molecules|TripCard", module);

stories.add("default", () => (
  <TripCard
    departureTime={dayjs().add(2, "hour")}
    arrivalTime={dayjs().add(3, "hour")}
    stops={3}
  />
));
