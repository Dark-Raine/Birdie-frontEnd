import React, { Component } from 'react';
import './App.css';
import API from './helpers/API'
import DropDownMenu from './components/DropDownMenu'
import DataTable from './components/DataTable'

class App extends Component{

  state = {
    options: null,
    requestedData: null,
    selectedOption: null
  }

  updateSelectedOption = (selectedOption) => {
    this.setState({selectedOption})
  }

  fetchData = (option, cb = this.updateSelectedOption) => {
    const encodedURI = encodeURI(option)
    API.retrieveData(encodedURI)
    .then(requestedData => this.setState({requestedData}))
    .then(() => cb(option))
  }

  componentDidMount(){
    API.retrieveOptions()
    .then(options => this.setState({options}))
  }

  render() {
    return (
      <div className="App">
      {this.state.options !== null ? <DropDownMenu className="dropdown-container" options={this.state.options} updateState={this.fetchData} /> : null}
      {this.state.requestedData !== null ? <DataTable className="table-container" data={this.state.requestedData} columnTitle={this.state.selectedOption}/> : null}
      </div>
    );
  }
}

export default App;
