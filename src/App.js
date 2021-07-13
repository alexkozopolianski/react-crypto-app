import React from "react";

import CryptoList from "./components/cryptoList";
import SelectedCryptoList from "./components/selectedCryptoList";

const App = () => {
  return (
    <div>
      <CryptoList />
      <SelectedCryptoList />
    </div>
  );
};

export default App;
