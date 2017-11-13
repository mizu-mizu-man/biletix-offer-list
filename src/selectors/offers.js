import moment from 'moment';

export default (offers, { text, sortBy, sortOrder }) => {
  return offers.filter((offer) => {
    const textMatch = offer.ak.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date' && sortOrder) {
      return (moment(a.departure_time).unix()) < (moment(b.departure_time).unix()) ? 1 : -1;
    } if (sortBy === 'date' && !sortOrder) {
      return (moment(a.departure_time).unix()) > (moment(b.departure_time).unix()) ? 1 : -1;
    } else if (sortBy === 'duration' && sortOrder) {
      return a.duration_in_seconds < b.duration_in_seconds ? 1 : -1;
    } else if (sortBy === 'duration' && !sortOrder) {
      return a.duration_in_seconds > b.duration_in_seconds ? 1 : -1;
    } else if (sortBy === 'price' && sortOrder) {
      return a.price < b.price ? 1 : -1;
    } else if (sortBy === 'price' && !sortOrder) {
      return a.price > b.price ? 1 : -1;
    }
  });
};
