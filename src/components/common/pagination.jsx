import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const { itemsCount, pageSize, onPageChange, currentPage } = this.props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pageCount + 1);

    Pagination.propTypes = {
      itemsCount: PropTypes.number.isRequired,
      pageSize: PropTypes.number.isRequired,
      onPageChange: PropTypes.func.isRequired,
      currentPage: PropTypes.number.isRequired,
    };

    if (pages.length === 1) return null;

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
