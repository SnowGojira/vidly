import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    let { total, pageSize, onPageChange } = this.props;
    let pageCount = Math.ceil(total / pageSize);
    let pages = _.range(1, pageCount + 1);

    return (
      <ul className="pagination">
        {pages.map((page) => {
          return (
            <li key={page} className="page-item">
              <span className="page-link">{page}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Pagination;
