import React from 'react';
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import InspectionInfo from "../components/details/InspectionInfo";
import InspectionResults from "../components/details/InspectionResults";
import PermitInfo from "../components/details/PermitInfo";
import ResultsHistory from "../components/details/ResultsHistory";

function Details() {
    return (
        <div>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <Nav />
            <InspectionInfo />
            <ResultsHistory />
            <InspectionResults />
            <PermitInfo />

        </div>
    )
};

export default Details;