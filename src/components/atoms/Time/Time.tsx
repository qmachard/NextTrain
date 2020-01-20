import React from 'react';
import dayjs, { Dayjs } from "dayjs";
import classNames from "classnames";

import './Time.scss';
import {Icon} from "components/atoms/Icon";

export type TimeProps = {
  departureTime: Dayjs,
  arrivalTime: Dayjs,
  warning?: boolean,
};

const Time: React.FC<TimeProps> = ({departureTime, arrivalTime, warning}) => {
  const componentClassName = classNames('time', {
    'time--warning': warning,
  });

  return <div className={componentClassName}>
    <span className="time_departure">{dayjs(departureTime).format('HH:mm')}</span>
    <Icon title="à" icon="arrow" className="time_arrow"/>
    <span className="time_arrival">{dayjs(arrivalTime).format('HH:mm')}</span>
  </div>;
};

Time.defaultProps = {
  warning: false,
};

export { Time };

