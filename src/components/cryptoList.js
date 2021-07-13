import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchCurrencies, fetchCurrencyData } from "../store/actions/Index";

const CryptoList = (props) => {
  useEffect(() => {
    props.fetchCurrencies();
  });

  const addCurrency = (currency) => {
    if (!props.selected[currency.code]) {
      props.fetchCurrencyData(currency.code);
    }
  };
  const renderListItem = (currency) => {
    const className = `list-group-item list-hover ${
      props.selected[currency.code] ? "list-active" : ""
    }`;
    return (
      <li
        className={className}
        key={currency.code}
        currency={currency}
        onClick={() => addCurrency(currency)}
      >
        {currency.name} ({currency.code})
      </li>
    );
  };
  return (
    <div>
      <ul className="list-group side-list">
        <ul className="list-group">
          <li
            className="list-group-item"
            style={{ backgroundColor: "#3f434a", color: "white" }}
          >
            Popular
          </li>
          <div>{props.popular.map((c) => renderListItem(c))}</div>
          <li
            className="list-group-item"
            style={{ backgroundColor: "#3f434a", color: "white" }}
          >
            All
          </li>
          <div>{props.all.map((c) => renderListItem(c))}</div>
        </ul>
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    popular: state.popularCurrencies,
    all: state.allCurrencies,
    selected: state.selectedCurrencies,
  };
}

export default connect(mapStateToProps, { fetchCurrencies, fetchCurrencyData })(
  CryptoList
);
