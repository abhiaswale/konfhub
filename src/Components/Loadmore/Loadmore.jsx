import React from "react";
import "./Loadmore.css";
const Loadmore = ({ setLimit, limit }) => {
  return (
    <div className="loadmore">
      <hr className="hr-line" />
      <div className="center-button">
        <button
          className="load-more-button"
          onClick={() => setLimit(limit + 12)}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Loadmore;
