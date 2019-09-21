import React, { Component } from 'react';

import CryptoList from './components/crypto_list';
import SelectedCryptoList from './components/selected_crypto_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <CryptoList />
        <SelectedCryptoList />
      </div>
    );
  }
}