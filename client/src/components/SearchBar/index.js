import React, { useState } from "react";
import './style.css';

function SearchBar (props) {


  return (
        <div className="Search">
          <input
            className="SearchInput"
            type="text"
              placeholder="Search For an Address"
              {...props}
          />
          <button onClick={props.handleFormSubmit} className="SearchSpan btn">
            <i className="fa fa-search"></i> 
          </button>
        </div>
  );
};

export default SearchBar;
