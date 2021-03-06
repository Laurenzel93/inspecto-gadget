
import './style.css';
import { useHistory } from "react-router-dom";
export function SearchBar (props) {


  return (
    <div>
        <div className="Search mt-4">
          <input
            className="SearchInput"
            type="text"
            name="search"
            value = {props.value}
            placeholder="Search Address or Permit No."
            onChange={props.onChange}
          />
          <button onClick={props.onClick} className="SearchBtn btn">
            <i className="fa fa-search"></i> 
          </button>
        </div>
         <div className="container col-12">
         <div className="row col-12" style={{ fontSize: "20px" }}>
         <button onClick= {props.onClick} className={ props.back } style={{ fontSize: "20px" }}>{'<<Return to all Inspections'}</button> 
         </div>  
       </div>
      </div>

  );
};


     

