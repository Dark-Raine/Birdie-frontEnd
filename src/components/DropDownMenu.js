import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchOptions,
  selectOption,
  storeOptionData
} from "../actions/optionActions";

class DropDownMenu extends Component {
  componentWillMount() {
    this.props.fetchOptions();
  }

  optionGenerator = (options = this.props.options) => {
    return options.map((option, idx) => (
      <option value={option} key={idx}>
        {option}
      </option>
    ));
  };

  sendSelected = (event, cb = this.props.selectOption) => {
    cb(event.target.value);
    this.props.storeOptionData(encodeURI(event.target.value));
  };

  render() {
    return (
      <div id="column-selector">
        <select
          defaultValue="Please Select"
          onChange={event => this.sendSelected(event)}
        >
          <option value={null} disabled="disabled">
            Please Select
          </option>
          {this.optionGenerator()}
        </select>
      </div>
    );
  }
}

DropDownMenu.propTypes = {
  fetchOptions: propTypes.func.isRequired,
  options: propTypes.array.isRequired
};

const mapStateToProps = state => ({
  options: state.options.options
});

export default connect(
  mapStateToProps,
  { fetchOptions, selectOption, storeOptionData }
)(DropDownMenu);
