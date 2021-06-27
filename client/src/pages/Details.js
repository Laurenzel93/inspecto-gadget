import React from 'react';
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import InspectionInfo from "../components/details/InspectionInfo";
import InspectionResults from "../components/details/InspectionResults";
import PermitInfo from "../components/details/PermitInfo";
import ResultsHistory from "../components/details/ResultsHistory";
import axios from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
    const [inspectionDetails, setInspectionDetails] = useState(false);
    const inspectionID = useParams();
    // inspectionID will also need to change

    useEffect(() => {

        setError(null);
        setLoading(true);
        axios
            // need actual existing route here v
            .get("/api/inspections/details", {
                inspectionID: inspectionID
            })
            .then((res) => {
                setLoading(false);
                setInspectionDetails(res.InspectionDetails);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <Nav />
            <InspectionInfo props={inspectionDetails} />
            <ResultsHistory />
            <InspectionResults />
            <PermitInfo />

        </div>
    )
};

export default Details;