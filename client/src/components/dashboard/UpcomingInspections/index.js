import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

export function Upcoming(props) {
    const history = useHistory();

    
       
return (
   
        <div className="row mb-2"  style={{ fontSize: "18px" }}>
            <div className="col-6 ">{props.date}</div>
            <div className="col-6 float-right "><button className="btn btn-secondary border border-dark float-right " onClick={() => history.push('inspections/' + props.id)}>Details</button></div>
            <div className="col-12 col-md-auto"><a href={props.href}>{props.address}</a></div>
            <div className="col-12 col-md-auto">{props.type}</div>
            <div className="col-12 col-md-auto">{props.permit_id}</div>
            <div className="col-12 col-md-auto"> Created: {props.date_scheduled} &nbsp; by: {props.admin.toLowerCase()}</div>
           
        </div>
    
  
)
   
}

export function Notes(props) {
   

    return (
       
        <div className="col-auto ">{props.note}</div>
          
               
)
   
}


 // <div className="card  col future-results m-1">
        //     <table className="card-body table table-borderless">
        //         <tbody>
        //             <tr >
        //                 <th scope="row"></th>
        //                 <td className="col-12 col-m-12">{props.date}</td>
        //                 <td className="col-sm-6 col-m-3">{props.address}</td>
        //                 <td className="col-sm-6 col-m-3">{props.type}</td>
        //                 <td className="col-sm-6 col-m-3">Created: {props.date_scheduled} &nbsp; by: {props.admin}</td>
        //                 <td colSpan="2" className=" col-sm-6 col-l-3 tmr-4 ">{props.permit_id}</td>
        //             </tr>
        //             <tr>
        //                 <th scope="row"></th>
        //                 <td col-lg-6 col-sm-6 col-l-3> Notes:&nbsp; {props.notes} </td>

        //                 <td colSpan="2" className=" mr-5"><button className="btn btn-secondary border border-dark " onClick={() => history.push('inspections/' + props.id)}>Results</button> &nbsp;</td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>