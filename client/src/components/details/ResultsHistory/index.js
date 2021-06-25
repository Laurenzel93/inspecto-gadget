import React from "react";
import './style.css';

function ResultsHistory() {
    return (

        <div className="container-fluid ml-auto m-3 p-3 border rounded border-primary bg-light" id="previousNotesContainer">

            <h3 className="d-flex justify-content-center">Results History</h3>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td className="col-2" id="timestamp">Date and Time Stamp</td>
                            <td id="resultsHistory">Results History Goes Here</td>
                        </tr>
                    </tbody>
                </table>

        </div>

    )
}

export default ResultsHistory;