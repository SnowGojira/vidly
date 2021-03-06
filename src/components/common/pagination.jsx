import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = ({ total, pageSize, onPageChange, currentPage }) => {
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
          <a className="page-link" href="#" onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
