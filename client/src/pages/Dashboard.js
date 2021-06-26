import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import ActionRequiredBanner from "../components/dashboard/ActionRequiredBanner";
import Today from "../components/dashboard/TodayInspections";
import Calendar from "../components/dashboard/Calendar/Calender";
import Upcoming from "../components/dashboard/UpcomingInspections";
import API from '../utils/API';

function Dashboard(props) {
    const [todayInspections, setTodayInspections] = useState()

    const getInspectionData = () => {
        API.getInspections()
            .then(res => {
                console.log('===========')
                console.log(res)
                console.log('===========')
            })
            .then (res => setTodayInspections(res))
    }

    useEffect(getInspectionData)

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Nav />
            <ActionRequiredBanner />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="text-center mt-4">Today's Inspections</h2>
                        <div className="border border-3 spacers p-3 bg-dark rounded">
                            <h4 className="text-white">Should display the current date HERE</h4>
                            <div className="card">
                                <div className="card-body bg-light">
                                    <Today></Today>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="text-center mt-4">Calendar</h2>
                        <div className="border border-3 spacers p-3 bg-dark rounded">
                            <div className="card">
                                <div className="card-body bg-light">
                                    <Calendar></Calendar>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="text-center mt-4">Upcoming Inspections</h2>
                        <div className="border border-3 spacers p-3 bg-dark rounded">
                            <div className="card">
                                <div className="card-body bg-light"></div>
                                <Upcoming></Upcoming>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Dashboard;