import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

class DataTable extends Component {
  tableRowGenerator = (rows = this.props.data) => {
    return rows
      .map((rowData, idx) => (
        <tr className={idx % 2 === 0 ? "row-grey" : "row-white"} key={idx}>
          <td>{idx + 1}</td>
          <td>{rowData.columnTitle}</td>
          <td>{rowData.count}</td>
          <td>{Math.ceil(rowData.ageAverage)}</td>
        </tr>
      ))
      .slice(0, 100);
  };

  render() {
    return (
      <div id="display-table">
        <table>
          <tbody>
            <tr id="table-header">
              <th>#</th>
              <th>{this.props.columnTitle || "Placeholder"}</th>
              <th>Count</th>
              <th>Average Age</th>
            </tr>
            {this.tableRowGenerator()}
          </tbody>
        </table>

        {this.props.data.length > 100 ? (
          <p>Undisplayed rows: {this.props.data.length - 100}</p>
        ) : null}
      </div>
    );
  }
}

DataTable.propTypes = {
  data: propTypes.array.isRequired,
  columnTitle: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  data: state.options.requestedData,
  columnTitle: state.options.selectedOption
});

export default connect(mapStateToProps)(DataTable);
