import { useState } from "react";
import "./Search.css";
import search from "../assets/search.svg";
import arrow from "../assets/Arrow.svg";

const Search = (props) => {
  const [searchContent, setSearchContent] = useState("");
  const [option, setOption] = useState();

  const inputHandler = (value) => {
    setSearchContent(value);
    props.getSearchItem(value);
  };

  const pastEventsHandler = (value) => {
    const val = value === "true" ? true : false;
    setOption(val);
    props.getPastEvents(val);
  };

  return (
    <div className="search">
      <div className="search-container">
        {/* //////////////SEARCH SECTION///////////////// */}
        <div className="search-section">
          <label>Search</label>
          <input
            type="text"
            value={searchContent}
            onChange={(event) => {
              inputHandler(event.target.value);
            }}
          ></input>
          <span className="search-input">
            <img src={search} alt="search icon"></img>
          </span>
        </div>

        {/* //////////////PAST EVENTS///////////////// */}
        <div className="past-events-section">
          <label>Past Events</label>
          <select
            value={option}
            onChange={(event) => {
              pastEventsHandler(event.target.value);
            }}
          >
            <option style={{ color: "gray" }}>Select Type</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <span className="past-events-input">
            <img src={arrow} alt="dropdown-arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Search;
