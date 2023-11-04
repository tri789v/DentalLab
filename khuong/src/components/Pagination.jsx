import PropTypes from "prop-types";
import React from "react";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { page, total, size } = pagination;
  const totalPages = Math.ceil(total / size);

  const handlePageChange = (newPage) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  const renderPageNumber = () => {
    const pageNumbers = [];

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
      pageNumbers.push(
        <button
          className={"join-item btn".concat(` ${page === currentPage ? "btn-neutral" : "btn-outline"}`)}
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
