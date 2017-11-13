export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByDuration = () => ({
  type: 'SORT_BY_DURATION'
});

export const sortByPrice = () => ({
  type: 'SORT_BY_PRICE'
});
