import React from 'react';
import dayjs, {Dayjs} from 'dayjs';

import './TripCard.scss';

export type TripCardProps = {
  departureTime: Dayjs,
  arrivalTime: Dayjs,
  stops: number,
  railway?: string,
  retarded?: boolean,
};

export const TripCard: React.FC<TripCardProps> = ({departureTime, arrivalTime}) => {
  const today = dayjs();
  const ETD = departureTime.diff(today, 'minute');
  console.log(ETD);

  return (
    <article className="trip-card">
      <div className="trip-card_inner">
        <div className="trip-card_times">
          <span className="trip-card_time"><strong>{dayjs(departureTime).format('HH:mm')}</strong></span>
          <span className="trip-card_time">{dayjs(arrivalTime).format('HH:mm')}</span>
        </div>

        <div className="trip-card_eta">dans <strong>{ETD} mn</strong></div>
      </div>
    </article>
  );
};
