import React from "react";
import PropTypes from "prop-types";

TableGenerator.propTypes = {
  headerNames: PropTypes.object.isRequired,
  renderRowHandler: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  block: PropTypes.func,
};

EmptyList.propTypes = {
  items: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export function TableGenerator(props) {
  const { headerNames, renderRowHandler, items, block } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {headerNames.map((headerName) => (
            <th>{headerName}</th>
          ))}
        </tr>
      </thead>
      {renderRowHandler(items, block)}
    </table>
  );
}

export function EmptyList(props) {
  const { items, heading, buttonMessage, linkTo } = props;

  return items.length === 0 ? (
    <div>
      <div className="hero h-80 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold">{heading}</h1>
            <br />
            <a className="btn btn-primary" href={linkTo}>
              {buttonMessage}
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
