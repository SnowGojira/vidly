import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    let { total, pageSize, onPageChange, currentPage } = this.props;
    let pageCount = Math.ceil(total / pageSize);
    let pages = _.range(1, pageCount + 1);

    if (pageCount === 1) pages = [];

    return (
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Pagination;
