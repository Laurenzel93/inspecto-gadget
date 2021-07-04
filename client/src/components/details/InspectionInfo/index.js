import React from "react";
import './style.css';


export function InspectionInfo(props) {
  
    return (
        <div className=" mb-0 container mt-4 col-11 bg-light">
            <div className="row" style={{ fontSize: "20px" }}>
              
                <div className="col-12 col-md-auto mb-2 ">{props.date}</div>
                <div className="col-12 col-md-auto mb-2 ">{props.address}</div>
                <div className="col-12 col-md-auto mb-2 ">{props.type}</div>
                <div className="col-12 col-md-auto mb-2 ">{props.permit_id}</div>
                <div className="col-12 col-md-auto mb-2 "> Created: {props.date_scheduled} &nbsp; by: {props.admin}</div>
                <div className="col- col-md-12 border border-bottom-0 bg-light ">Notes: </div>
            </div>
    
        </div>
      
    )
       
    }

// export function InspectionDetails(props) {
   
//     return (
//                     <div className ="col justify-content-space-between"> 
//                         <tr>
                      
//                             <td id="date">{props.date}</td>
//                             <td id="address">{props.address}</td>
//                             <td id="inspectionType">{props.type}</td>
//                             <td id="permitNumber">{props.permit_id}</td>
//                         </tr>
//                         <tr>
//                             <td colSpan="2" id="admin">{props.admin}</td>
//                             <td colSpan="2" id="timestamp">{props.date_scheduled}</td>
//                         </tr>
//                         <tr>Notes:</tr>
//                     </div> 
//     )  
// }

export function NoteDetails(props) {
   
   
   

            return (
                <div className= "container mt-0 col-11 mb-2">
                    <div className="row">
                        <div className="col- col-md-12  border border-top-0">{props.note}</div>
                        </div>    
                </div>
        )
           
        }
