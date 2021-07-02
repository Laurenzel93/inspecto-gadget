import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import { getUser } from '../utils/Session';
import { Helmet } from "react-helmet";
import { PastComponent, InspectionsTable } from "../components/PastComponent";
import Nav from "../components/Nav";
import { Upcoming, DateCard, Heading } from "../components/dashboard/UpcomingInspections";
import Moment from 'moment';
import { SearchInput, SearchBtn } from "../components/SearchBar";
import API from "../utils/API"





function PastInspections() {
    const [inspections, setInspections] = useState([]);
    const [addressSearch, setAddressSearch] = useState("");

    const history = useHistory();
    useEffect(() => {
        if (getUser() != null) {
            loadInspections()
        } else {
            history.push('/login');
        }
    }, [])

    async function loadInspections() {
        await API.getInspections()
            .then(res => {
                setInspections(res.data)
            }).catch(err => console.log(err));
    };

    let present = [];
    let past = [];
    inspections.forEach(inspection => {

        if ((Moment(inspection.date).isBefore(Moment(), 'day'))) {
            past.push(inspection)

        } else if ((Moment(inspection.date).isSame(Moment(), 'day'))) {
            present.push(inspection)
        }
    })
    const grouped = past.reduce((grouped, inspection) => {
        const date = inspection.date;
        if (!grouped[date]) {
            grouped[date] = [];
        }
        grouped[date].push(inspection);
        return grouped;
    }, {});

    // Edit: to add it in the array format instead
    const yore = Object.keys(grouped).map((date) => {
        return {
            date,
            inspections: grouped[date]
        };
    });

    console.log(yore);


    const handleInputChange = event => {
        setAddressSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(addressSearch)
        API.getAddress(addressSearch)

            .then(res => setInspections(res.data))
            .catch(err => console.log(err));
    };


    return (
        <div>
            <Helmet>
                <title>Past Inspections</title>
            </Helmet>
            <Nav />
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-lg-12 col-sm-12">
                        <h2 className="text-center mt-4">Today's Inspections</h2>
                        {present.length ? (
                            <div className="p-3 bg-dark rounded">
                                <h4 className="text-white">
                                    <p className="">{Moment().format("dddd, MMMM Do YYYY").toString()}</p>
                                    <p className=""> Inspections Today:{" "}{present.length} </p>
                                </h4>
                                {present.map(inspection => (
                                    <div className="card">
                                        <div className="bg-light">
                                            <PastComponent key={inspection.id}
                                                id={inspection.id}
                                                date={Moment(inspection.date).format("dddd, MMMM Do YYYY")}
                                                address={inspection.address}
                                                type={inspection.type}
                                                permit_id={inspection.permit_id}
                                                admin={inspection.admin}
                                                date_scheduled={Moment(inspection.date_scheduled).format("MM- D-YY")}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <h3> No Inspections Today</h3>
                        )}
                    </div>
                    {yore.length ? (
                        <div className="col-lg-12 col-sm-12">
                            <h2 className="text-center mt-4">Past Inspections</h2>
                            {yore.map(card => (
                                <div className="p-3 bg-dark rounded">
                                    <h4 className="text-white d-flex justify-content-between">
                                        <span className="mr-4">{Moment(card.date).format("dddd, MMMM Do YYYY").toString()}</span>
                                        <span className="ml-5 align-right">Inspections: &nbsp; &nbsp; &nbsp; &nbsp;{card.inspections.length} </span>
                                    </h4>
                                    {card.inspections.map(inspection => (
                                        <div className="card ">
                                            <div className="bg-light">
                                                <PastComponent key={inspection.permit_id}
                                                    id={inspection.id}
                                                    date={Moment(inspection.date).format("dddd, MMMM Do YYYY")}
                                                    address={inspection.address}
                                                    type={inspection.type}
                                                    permit_id={inspection.permit_id}
                                                    admin={inspection.admin}
                                                    date_scheduled={Moment(inspection.date_scheduled).format("MM- D-YY")}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h3> No Result to Display</h3>
                    )}
                </div>
            </div>
        </div>
    )
};

export default PastInspections;