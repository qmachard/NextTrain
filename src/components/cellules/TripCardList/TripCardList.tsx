import React from 'react';

import './TripCardList.scss';

import {TripCard, TripCardProps} from "../../molecules/TripCard";

export type TripCardListProps = {
  items: TripCardProps[],
};

const TripCardList: React.FC<TripCardListProps> = ({items}) => {
  return (
    <ul className="trip-card-list">
      {
        items.map(item => (
          <li className="trip-card-list_item"><TripCard {...item} /></li>
        ))
      }
    </ul>
  );
};

export { TripCardList };
