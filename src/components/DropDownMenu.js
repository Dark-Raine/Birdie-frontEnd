import React, { Component } from 'react';

class DropDownMenu extends Component{

    optionGenerator = (titles = this.props.options) => {
        return titles.map((title, idx) => <option value={title} key={idx}>{title}</option>)
    }

    sendSelected = (event, cb = this.props.updateState) => {
        cb(event.target.value)
    }

  render() {
    return (
        <div id="column-selector">
            <select onChange={(event) => this.sendSelected(event)}>
                {this.optionGenerator()}
            </select>
        </div>
    );
  }
}

export default DropDownMenu;
