import React from "react";
import './style.css';

function InspectionInfo() {
    return (
        <div className="container-fluid border rounded border-primary p-4 justify-content-center" id="inspectionInfoContainer">
            <div className="col justify-content-md-center">
                <table className="table table-bordered table-primary">
                    <tbody>
                        <tr>
                            <td id="date">Date</td>
                            <td id="address">Address</td>
                            <td id="inspectionType">Inspection Type</td>
                            <td id="permitNumber">Permit Number</td>
                        </tr>
                        <tr>
                            <td colSpan="2" id="notes">Notes: </td>
                            <td colSpan="2" id="timestamp">Timestamp</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default InspectionInfo;