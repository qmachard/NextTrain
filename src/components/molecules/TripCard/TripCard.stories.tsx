import React from "react";
import dayjs from "dayjs";

import { storiesOf } from "@storybook/react";

import { TripCard } from "./TripCard";

const stories = storiesOf("Molecules|TripCard", module);

stories.add("ter", () => (
  <TripCard
    service="ter"
    departureTime={dayjs().add(2, "hour")}
    arrivalTime={dayjs().add(3, "hour")}
    stops={3}
  />
));

stories.add("tgv", () => (
  <TripCard
    service="tgv"
    departureTime={dayjs().add(2, "hour")}
    arrivalTime={dayjs().add(3, "hour")}
    stops={3}
  />
));

stories.add("+ railway", () => (
  <TripCard
    service="tgv"
    departureTime={dayjs().add(2, "hour")}
    arrivalTime={dayjs().add(3, "hour")}
    stops={3}
    railway="A"
  />
));

stories.add("+ retarded", () => (
  <TripCard
    service="tgv"
    departureTime={dayjs().add(2, "hour")}
    arrivalTime={dayjs().add(3, "hour")}
    stops={3}
    delay={15}
  />
));
