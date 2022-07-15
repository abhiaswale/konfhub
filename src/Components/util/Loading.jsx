import React from "react";
import "./Loading.css";
const Loading = (props) => {
  return (
    <div className="loading">
      {props.searchItem.length > 0 && <h1>NO EVENTS FOUND</h1>}
      {props.searchItem.length <= 0 && <h1>LOADING...</h1>}
    </div>
  );
};

export default Loading;
