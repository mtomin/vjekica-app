import React from "react";

function PaginationFooter(props) {
  return (
    <div>
      <button
        className="btn btn-primary"
        disabled={props.page === 1}
        onClick={() => props.onPageChange(props.page - 1)}
      >
        Previous page
      </button>
      <button
        className="btn btn-primary"
        onClick={() => props.onPageChange(props.page + 1)}
      >
        Next page
      </button>
    </div>
  );
}

export default PaginationFooter;
