import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';


import { removeCurrency } from '../actions/Index';

class CryptoData extends Component {
  renderArrow() {
    const change = this.props.currency.change;

    if (change > 0) {
      return(
        <FontAwesome
         name='chevron-up' 
         style={{ color: '#8de095' }}
         />
      );
    } else if (change < 0) {
      return(
        <FontAwesome
          name='chevron-down' 
          style={{ color: '#ed5353' }}
          />
      );
    } else {
      return(
        <FontAwesome
          name='ellipsis-h' 
          style={{ color: '#444' }}
          />
      );
    }
  }

  onClose(event) {
    event.preventDefault();
    this.props.removeCurrency(this.props.currency.base);
  }

  render() {
    const currency = this.props.currency;

    return (
     
       
 
  <div className="card-deck">
  <div className="card" style={{ backgroundColor: '#3f434a', color: 'white'}}>
    <div className="card-body">
      <h5 className="card-title" style={{ color: '#5fc5ed'}}>{currency.base} {this.renderArrow()}</h5>
      <p className="card-text">{_.round(currency.price, 3)} USD</p>
      <p className="card-text">{_.round(currency.change/currency.price * 100, 3)}% Last Hour</p>
    </div>
    </div>
    
</div>
      
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currency: ownProps.currency
  };
}

export default connect(mapStateToProps, { removeCurrency })(CryptoData);