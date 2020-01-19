import React from 'react';
import dayjs, {Dayjs} from 'dayjs';

import './TripCard.scss';
import {Time} from "../../atoms/Time";
import {Info} from "../../atoms/Info";
import {Icon} from "../../atoms/Icon";

export type TripCardProps = {
  departureTime: Dayjs,
  arrivalTime: Dayjs,
  stops: number,
  service: 'ter' | 'tgv',
  railway?: string,
  delay?: number,
};

const TripCard: React.FC<TripCardProps> = ({departureTime, arrivalTime, stops, railway, service, delay}) => {
  const today = dayjs();
  const ETD = departureTime.diff(today, 'minute');
  const duration = arrivalTime.diff(departureTime, 'minute');

  return (
    <article className="trip-card">
      <div className="trip-card_inner">
        <Icon icon={service} title={service.toUpperCase()} className="trip-card_service" />

        <Time departureTime={departureTime} arrivalTime={arrivalTime} warning={!!delay} />

        <Info className="trip-card_etd" label="dans" big warning={!!delay}>{ETD} mn</Info>
      </div>

      <ul className="trip-card_infos">
        <li className="trip-card_info">
          <Info label={service.toUpperCase()}>
            3456
          </Info>
        </li>
        {delay && (
          <li className="trip-card_info">
            <Info label="retard" warning>{delay} mn</Info>
          </li>
        )}
        <li className="trip-card_info">
          <Info label="destination">
            St-Malo
          </Info>
        </li>
        <li className="trip-card_info">
          <Info label="durée">{duration} mn</Info>
        </li>
        <li className="trip-card_info">
          <Info label="arrêts">{stops}</Info>
        </li>
        {railway && (
          <li className="trip-card_info trip-card_info--right">
            <Info label="voie">{railway}</Info>
          </li>
        )}
      </ul>
    </article>
  );
};

TripCard.defaultProps = {};

export { TripCard };
