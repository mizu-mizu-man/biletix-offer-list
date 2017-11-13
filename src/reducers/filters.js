const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  sortOrder: true
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text}
    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date', sortOrder: !state.sortOrder };
    case 'SORT_BY_DURATION':
      return {...state, sortBy: 'duration', sortOrder: !state.sortOrder };
    case 'SORT_BY_PRICE':
      return {...state, sortBy: 'price', sortOrder: !state.sortOrder };
    default:
      return state;
  };
};
