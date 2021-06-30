import { useState } from "react";
import axios from 'axios';
import './style.css';

function InspectionResults() {
    const [inputNotes, setInputNotes] = useState('')
    const [mainResult, setMainResult] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const allResults = { mainResult, inputNotes }

        axios('')
    }

    return (

        <div className="container-fluid p-4 border rounded border-dark bg-secondary">
            <form onSubmit={handleSubmit} className="row ml-auto m-3 p-3 border rounded border-primary bg-light">

                <h2>Inspection Results</h2>

                {/* <!-- Drop Down Button--> */}
                <div className="container-fluid input-group form-check">
                    <select value={mainResult} onChange={(e) => setMainResult(e.target.value)}
                        className="custom-select col-4" required>
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
                <textarea className="form-control m-3"
                    value={inputNotes}
                    onChange={(e) => setInputNotes(e.target.value)}
                    placeholder="Type notes here..."
                    rows="10" required>
                </textarea>

                {/* <!-- Save Icon Button --> */}
                <div className="ml-auto align-self-end">
                    <button className="btn btn-outline-success"
                        style={{ fontSize: "25px" }}>Save
                     <i style={{ fontSize: "50px" }}
                            className="fa fa-save"></i>
                    </button>
                </div>

            </form>
        </div>

    )
}

export default InspectionResults;