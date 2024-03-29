import { FETCH_CURRENCIES } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return action.payload.data.rows;
    default:
      return state;
  }
}
