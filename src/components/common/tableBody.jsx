import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell(movie, column) {
    return column.content ? column.content(movie) : _.get(movie, column.path);
  }

  createKey(movie, column) {
    return movie[this.props.valueProperty] + (column.label || column.key);
  }
  render() {
    const { movies, columns, valueProperty } = this.props;
    return (
      <tbody>
        {movies.map((movie) => (
          <tr key={movie[valueProperty]}>
            {columns.map((column) => (
              <td key={this.createKey(movie, column)}>
                {this.renderCell(movie, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  valueProperty: "_id",
};

export default TableBody;
