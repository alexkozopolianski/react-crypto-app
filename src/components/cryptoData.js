import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { removeCurrency } from "../store/actions/Index";

const CryptoData = (props) => {
  const currency = props.currency;
  const onClose = (e) => {
    e.preventDefault();
    removeCurrency(currency.base);
  };

  return (
    <div className="card-deck">
      <div
        className="card"
        style={{ backgroundColor: "#3f434a", color: "white" }}
      >
        <div className="card-body">
          <h5 className="card-title" style={{ color: "#5fc5ed" }}>
            {currency.base}{" "}
          </h5>
          <p className="card-text">{_.round(currency.price, 3)} USD</p>
          <p className="card-text">
            {_.round((currency.change / currency.price) * 100, 3)}% Last Hour
          </p>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    currency: ownProps.currency,
  };
}

export default connect(mapStateToProps, { removeCurrency })(CryptoData);
