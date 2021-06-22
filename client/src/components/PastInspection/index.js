import React from "react";

function PastInspections(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <h2 className="text-center">Past Inspections</h2>
                    <div className="border border-3 spacers p-3 bg-dark rounded">
                        <div className="card">
                            <div className="card-body bg-light">
                                <div className="card">
                                    <h2>Date and number of inspections on that day</h2>
                                    <table className="table table-border table-striped">
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>props.date props.address props.type props.code props.date props.admin</td>
                                                <td>props.results props.notes</td>
                                                <td><button className="btn btn-secondary border border-dark">More Info</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PastInspections;