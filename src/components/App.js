import React, { Component } from 'react';
import ListFilters from '../containers/ListFilters';
import OfferList from '../containers/OfferList';
import Header from '../components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <ListFilters />
      <OfferList />
    </div>
  );
};

export default App;
