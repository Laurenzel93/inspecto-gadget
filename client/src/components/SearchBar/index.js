import React, { useState } from "react";
import './style.css';

function SearchBar (props) {

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };


  return (
        <div className="Search">
          <input
            className="SearchInput"
            type="text"
            placeholder="Search"
           
            value={searchTerm}
            onChange={handleChange}
          />
          <span className="SearchSpan">
            <i className="fa fa-search"></i> 
          </span>
        </div>
  );
};

export default SearchBar;
