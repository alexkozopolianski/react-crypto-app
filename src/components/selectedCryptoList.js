import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { fetchCurrencyData } from "../store/actions/Index";
import CryptoData from "./cryptoData";

const TIME_INTERVAL = 30000;

const SelectedCryptoList = (props) => {
  const ordered = _.sortBy(_.values(props.selected), ["base"]);
  useEffect(() => {
    props.popular.map((c) => props.fetchCurrencyData(c.code));
    setInterval(updatePrices, TIME_INTERVAL);
  });

  const updatePrices = () => {
    _.map(props.selected, (c) => props.fetchCurrencyData(c.base));
  };

  const renderCurrencyData = (currency) => {
    return <CryptoData key={currency.base} currency={currency} />;
  };

  return (
    <div className="dashboard">
      <div className="grid">{ordered.map((c) => renderCurrencyData(c))}</div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selected: state.selectedCurrencies,
    popular: state.popularCurrencies,
    error: state.error,
  };
}

export default connect(mapStateToProps, { fetchCurrencyData })(
  SelectedCryptoList
);
