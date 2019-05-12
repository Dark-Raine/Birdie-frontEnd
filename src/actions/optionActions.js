import {
  POPULATE_OPTIONS,
  SELECT_OPTION,
  STORE_OPTION_DATA
} from "../actions/types";

export const fetchOptions = () => dispatch => {
  fetch("http://localhost:5000/column/variables")
    .then(resp => resp.json())
    .then(data =>
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
  fetch(`http://localhost:5000/${option}`)
    .then(resp => resp.json())
    .then(data =>
      dispatch({
        type: STORE_OPTION_DATA,
        data
      })
    );
};
