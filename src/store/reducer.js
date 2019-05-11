export default function optionsReducer(
  state = {
    options: null,
    requestedData: null,
    selectedOption: null
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "POPULATE_OPTIONS":
      return Object.assign({}, state, {
        options: action.data
      });
    case "SELECT_OPTION":
      return Object.assign({}, state, {
        selectedOption: action.data
      });
    case "STORE_OPTION_DATA":
      return Object.assign({}, state, {
        requestedData: action.data
      });
    default:
      return state;
  }
}
