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
        items.length > 0 ? (
          items.map(item => (
            <li className="trip-card-list_item"><TripCard {...item} /></li>
          ))
        ) : (
          <p className="trip-card-list_no-result">Aucun trajets.</p>
        )
      }
    </ul>
  );
};

export { TripCardList };
