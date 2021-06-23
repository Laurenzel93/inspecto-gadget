import React from "react";
import 'style.css';

function InspectionResults() {
    return (

        <div className="container-fluid p-4 border rounded border-dark bg-secondary">
            <div className="row ml-auto m-3 p-3 border rounded border-primary bg-light">

                <h2>Inspection Results</h2>

                {/* <!-- Drop Down Button--> */}
                <div className="container-fluid input-group form-check">
                    <select className="custom-select col-4">
                        <option selected>No result</option>
                        <option value="Approved">Approved</option>
                        <option value="Disapproved">Disapproved</option>
                        <option value="Partially Approved">Partially Approved</option>
                        <option value="Locked Out">Locked Out</option>
                        <option value="Not Ready">Not Ready</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>

                {/* <!-- Input Notes Field --> */}
                <div className="container-fluid form-control m-3">
                    <div className="form-control form-control-lg" type="text">
                        <h3 className="d-flex justify-content-center">Custom Notes</h3>
                        <textarea className="form-control" placeholder="Type notes here..." rows="10"></textarea>
                    </div>
                </div>

                {/* <!-- Save Icon Button --> */}
                <div className="ml-auto align-self-end">
                    <button className="btn btn-outline-success" style="font-size:25px">Save
                     <i style="font-size:50px;" className="fa fa-save"></i>
                    </button>
                </div>

            </div>
        </div>

    )
}

export default InspectionResults;