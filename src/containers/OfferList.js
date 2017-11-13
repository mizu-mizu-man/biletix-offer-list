import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOffers } from '../actions/offers';
import OfferListItem from '../components/OfferListItem';
import selectOffers from '../selectors/offers';

class OfferList extends Component {
  componentDidMount() {
    this.props.fetchOffers();
  };

  offerItems() {
    return this.props.offers.map((offer, index) => {
      return <OfferListItem key={index} offer={offer} />
    });
  };

  render() {
    if (!this.props.offers) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div className="list-header">
          <div className="show-for-desktop">Авиакомпания</div>
          <div className="show-for-desktop">Дата вылета</div>
          <div className="show-for-desktop">Мин в пути</div>
          <div className="show-for-desktop">Цена</div>
          <div className="show-for-mobile">Список предложений</div>
        </div>
        <div className="list-body">
          {this.offerItems()}
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    offers: selectOffers(state.offers, state.filters)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchOffers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferList);
