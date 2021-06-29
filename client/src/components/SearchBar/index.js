import React from "react";
import './style.css';

export function SearchInput (props) {


  return (
       
          <input
            className="SearchInput"
            type="text"
              placeholder="Search For an Address"
              {...props}
          />
         
        
  );
};

export function SearchBtn(props) {
  return (
    < button {...props} className="SearchBtn btn">
             {props.children}
            <i className="fa fa-search"></i> 
          </button>
  );
}
