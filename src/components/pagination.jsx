import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  pageSection(page) {
    return (
      <li key={page} className="page-item">
        <span className="page-link">
          {page}
          <span className="sr-only">(current)</span>
        </span>
      </li>
    );
  }
  render() {
    let { total, pageSize, onPageChange } = this.props;
    let pageCount = total / pageSize;
    let pages = _.range(1, pageCount + 1);

    return (
      <ul className="pagination pagination-sm">
        {pages.map((page) => this.pageSection(page))}
      </ul>
    );
  }
}

export default Pagination;
