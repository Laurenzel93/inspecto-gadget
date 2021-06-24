import React from "react";
import { Helmet } from "react-helmet";
import PastComponent from "../components/PastComponent";
import Nav from "../components/Nav";

function PastInspections() {
    return (
        <div>
            <Helmet>
                <title>Past Inspections</title>
            </Helmet>
            <Nav />
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-lg-12 col-sm-12">
                        <h2 className="text-center">Past Inspections</h2>
                        <div className="border border-3 spacers p-3 bg-dark rounded">
                            <div className="card">
                                <div className="card-body bg-light">
                                    <div className="card">
                                        <h2>Date and number of inspections on that day</h2>
                                        <table className="table table-border table-striped">
                                            <tbody>
                                                <PastComponent>
                                                </PastComponent>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PastInspections;