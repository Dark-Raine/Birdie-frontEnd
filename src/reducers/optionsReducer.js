import {
  POPULATE_OPTIONS,
  SELECT_OPTION,
  STORE_OPTION_DATA
} from "../actions/types";

const initialState = {
  options: [],
  requestedData: [],
  selectedOption: ""
};

export default function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE_OPTIONS:
      return { ...state, options: action.data };
    case SELECT_OPTION:
      return { ...state, selectedOption: action.data };
    case STORE_OPTION_DATA:
      return { ...state, requestedData: action.data };
    default:
      return state;
  }
}
