
import React from "react";
import './style.css';


export function InspectionInfo(props) {
  
    return (

            <div className="row" style={{ fontSize: "18px" }}>
              
                <div className="col-12 col-md-auto mb-2 ">{props.date}</div>
                <div className="col-12 col-md-auto mb-2 ">{props.address}</div>
                <div className="col-12 col-md-auto mb-2 ">{props.type}</div>
                <div className="col-12 col-md-auto mb-2 ">{props.permit_id}</div>
                <div className="col-12 col-md-auto mb-2 "> Created: {props.date_scheduled} &nbsp; by: {props.admin}</div>
               
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
            
            <div className="col-12 col-md-5 ">{props.number}{props.note}</div>
        )
}
