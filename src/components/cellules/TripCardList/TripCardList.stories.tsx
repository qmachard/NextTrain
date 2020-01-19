import React from "react";
import dayjs from "dayjs";

import { storiesOf } from "@storybook/react";

import { TripCardList } from "./TripCardList";
import { TripCardProps} from "../../molecules/TripCard";

const stories = storiesOf("Cellules|TripCardList", module);

const tripDefault: TripCardProps = {
  service:"ter",
  departureTime: dayjs().add(2, "hour"),
  arrivalTime : dayjs().add(3, "hour"),
  stops: 3,
};

const tripTGV: TripCardProps = {
  ...tripDefault,
  service: 'tgv',
};

const tripWithRailway: TripCardProps = {
  ...tripDefault,
  railway: '3',
};

const tripRetarded: TripCardProps = {
  ...tripDefault,
  delay: 15,
};

stories.add("default", () => (
  <TripCardList
    items={[
      tripWithRailway,
      tripWithRailway,
      tripTGV,
      tripRetarded,
      tripDefault,
      tripDefault,
    ]}
  />
));

stories.add("no items", () => (
  <TripCardList
    items={[]}
  />
));
