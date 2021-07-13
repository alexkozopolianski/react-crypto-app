import { combineReducers } from "redux";

import popularCurrenciesReducer from "./popularCurrenciesReducer";
import allCurrenciesReducer from "./allCurrenciesReducer";
import selectedCurrenciesReducer from "./selectedCurrenciesReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  popularCurrencies: popularCurrenciesReducer,
  allCurrencies: allCurrenciesReducer,
  selectedCurrencies: selectedCurrenciesReducer,
  error: errorReducer,
});

export default rootReducer;
