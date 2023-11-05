import PropTypes from "prop-types";
import React from "react";
import debounce from "lodash/debounce";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { page, total, size } = pagination;
  const totalPages = Math.ceil(total / size);

  const handlePageChange = debounce((newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }, 300);

  const renderPageNumber = () => {
    const pageNumbers = [];

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
      pageNumbers.push(
        <button
          className={"join-item btn".concat(` ${page === currentPage ? "btn-neutral" : "btn-outline"}`)}
          onClick={() => handlePageChange(currentPage)}
        >
          {currentPage}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="join flex justify-center mt-6">
      <button
        className="join-item btn btn-outline"
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>
      {renderPageNumber()}
      <button
        className="join-item btn btn-outline"
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
