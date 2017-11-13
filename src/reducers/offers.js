export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_OFFERS':
      return action.payload;
  };
  return state;
};
