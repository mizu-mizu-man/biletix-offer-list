import React from 'react';
import moment from 'moment';

const OfferListItem = ({ offer }) => {
  return (
    <div className="list-item">
      <h3 className="list-item__title">{offer.ak}</h3>
      <span className="list-item__date">{moment(offer.departure_time).format('YYY-MM-DD HH:mm')}</span>
      <span className="list-item__duration">{offer.duration_in_seconds / 60}<span className="show-for-mobile"> мин.</span></span>
      <h3 className="list-item__price">{`${offer.price} p.`}</h3>
    </div>
  );
};

export default OfferListItem;
