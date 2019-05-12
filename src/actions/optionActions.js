import {
  POPULATE_OPTIONS,
  SELECT_OPTION,
  STORE_OPTION_DATA
} from "../actions/types";
import API from "../helpers/API";

export const fetchOptions = () => dispatch => {
  API.retrieveOptions().then(data =>
    dispatch({
      type: POPULATE_OPTIONS,
      data
    })
  );
};

export const selectOption = option => dispatch => {
  dispatch({
    type: SELECT_OPTION,
    data: option
  });
};

export const storeOptionData = option => dispatch => {
  API.retrieveData(option).then(data =>
    dispatch({
      type: STORE_OPTION_DATA,
      data
    })
  );
};
