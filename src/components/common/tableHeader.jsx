import React, { Component } from "react";
//columns:array
//
class TableHeader extends Component {
  raiseSort(path) {
    //第一次是升序，第二次是降序
    let sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }
  render() {
    const { columns } = this.props;
    return (
      <thead style={{ fontWeight: "bold" }}>
        <tr>
          {columns.map((column) => (
            <th
              key={column.label || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
