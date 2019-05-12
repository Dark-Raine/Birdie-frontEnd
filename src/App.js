import React, { Component } from "react";
import "./App.css";
import DropDownMenu from "./components/DropDownMenu";
import DataTable from "./components/DataTable";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <DropDownMenu />
          <DataTable />
        </div>
      </Provider>
    );
  }
}

export default App;
