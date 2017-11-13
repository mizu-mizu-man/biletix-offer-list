import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByDuration, sortByPrice } from '../actions/filters';

class ListFilters extends Component {
  state = {
    isVisible: true
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortByDate = () => {
    this.props.sortByDate();
  };

  onSortByDuration = () => {
    this.props.sortByDuration();
  };

  onSortByPrice = () => {
    this.props.sortByPrice();
  };

  onFiltersShow = () => {
    document.querySelector('.list-filters__filters').classList.toggle('show-for-desktop');
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="container">
        <div className="list-filters">
          <div className="list-filters__filters show-for-desktop">
            <input
              type="text"
              placeholder="Поиск по авиа компаниям"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
            <button className="button button--white" onClick={this.onSortByDate}>
              По дате
            </button>
            <button className="button button--white" onClick={this.onSortByDuration}>
              По времени в пути
            </button>
            <button className="button button--white" onClick={this.onSortByPrice}>
              По цене
            </button>
          </div>
          <div className="list-filters__show show-for-mobile">
            <button className="button" onClick={this.onFiltersShow}>
              {this.state.isVisible ? 'Показать фильтры' : 'Скрыть фильтры'}
            </button>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByDuration: () => dispatch(sortByDuration()),
  sortByPrice: () => dispatch(sortByPrice())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListFilters);
