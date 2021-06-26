import React, { useState } from "react";
import './style.css';

function SearchBar (props) {


  return (
        <div className="Search">
          <input
            className="SearchInput"
            type="text"
              placeholder="Search For an Address"
            name="AddressSearch"
            value={props.value}
            onChange={props.handleChange}
          />
          <span onClick={props.handleFormSubmit} className="SearchSpan">
            <i className="fa fa-search"></i> 
          </span>
        </div>
  );
};

export default SearchBar;
