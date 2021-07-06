import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import ActionRequiredBanner from "../components/dashboard/ActionRequiredBanner";
import Today from "../components/dashboard/TodayInspections";
import Calendar from "../components/dashboard/Calendar";
import { Upcoming, Notes }from "../components/dashboard/UpcomingInspections";
import Moment from 'moment';
import API from '../utils/API';
import { getUser } from '../utils/Session';

import { DayCellContent } from '@fullcalendar/react';



function Dashboard() {

    const [inspections, setInspections] = useState([]);
    const [calendar, setCalendar] = useState([])

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (getUser() != null) {
            loadInspections()
        } else {
            history.push('/login');
        };
    }, [])

    async function loadInspections() {
        await API.getInspections()
            .then(res => {
                setInspections(res.data)
            }).catch(err => console.log(err));
        await API.getCalender()
            .then(res => {
             // console.log(res.data)
              setCalendar(res.data)
            })
            .catch(err => {
              console.log(err)
            })
    }
    let present = [];
    let future = [];
    let past = [];
    inspections.forEach(inspection => {
        if ((Moment(inspection.date).isAfter(Moment(), 'day'))) {
            future.push(inspection)
        } else if ((Moment(inspection.date).isSame(Moment(), 'day'))) {
            present.push(inspection)
        } else if ((Moment(inspection.date).isBefore(Moment(), 'day'))) {
            past.push(inspection)
        }

    })
    present.forEach(inspection => {
        console.log(present)
        inspection.classname ="card p-2 "
       
        if (inspection.results.length == 0) {
            inspection.classname += "no-result-yet"
        } else {
            inspection.classname += "resultConfirm"
        }
    })
    future.forEach(inspection => {
        console.log(present)
        inspection.classname ="card p-2 "
       
        if (inspection.results.length == 0) {
            inspection.classname += "no-result-yet"
        } else {
            inspection.classname += "resultConfirm"
        }
    })

    const grouped = future.reduce((grouped, inspection) => {
        const date = inspection.date;
        if (!grouped[date]) {
            grouped[date] = [];
        }
        grouped[date].push(inspection);
        return grouped;
    }, {});

    // Edit: to add it in the array format instead
    const upcoming = Object.keys(grouped).map((date) => {
        return {
            date,
            inspections: grouped[date]
        };
    });
  
    // console.log(upcoming);

    const unfulfilled = () => {
        let isUnfulfilled = true
        past.forEach(inspection => {
            if (inspection.results.length == 0) {
        
             isUnfulfilled = true   
                return
            } else {
                isUnfulfilled = false
            }
        })
        return isUnfulfilled
    }

    // console.log(unfulfilled());


    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Nav />
            {unfulfilled() === true ? (
                <ActionRequiredBanner />
            ) : (
                null
            )}
            <div className="container-fluid">
                <div className="row mt-4">
                        <div className="col-lg-6 col-sm-12">
                            <h3 className="text-center mt-4">Today's Inspections</h3>
                                <div className="p-3 bg-dark rounded">
                                    <h4 className="text-white">
                                        <p className= "">{Moment().format("dddd, MMMM Do YYYY").toString()}</p>
                                        <p className= "">Inspections Today:{" "}{present.length} </p>
                                    </h4>
                                    {present.length ? (
                                        <div>
                                        {present.map(inspection => (
                                            <div className={inspection.classname}>
                                                <div className="">
                                                <Today key={inspection.id}
                                                    id = {inspection.id}
                                                    class = {inspection.classname}
                                                    date = {Moment(inspection.date).format("ddd, MMMM Do")} 
                                                    address = {inspection.address}
                                                    type = {inspection.type}
                                                    permit_id = {inspection.permit_id}
                                                    admin = {(inspection.admin).toLowerCase()}
                                                    date_scheduled = {Moment(inspection.date_scheduled).format("l")}
                                                />
                                                {inspection.notes.length ? (
                                                    <div className={inspection.classname}>
                                                      <div className="row mb-4 ">
                                                        <div className="col-auto ">Notes: </div> 
                                                            {inspection.notes.map(note => (
                                                                 <Notes 
                                                                    note = {note.note}/>
                                                            ))}
                                                        </div>
                                                    </div> 
                                                ) : (
                                                    <div className= "card-body mb-3 pt-0 container col-12 ">
                                                        <div className="row">
                                                            <div className="col- col-md-10  border border-top-0 ">No Notes to Display</div>
                                                        </div>    
                                                    </div>
                                                    )}    
                                                </div> 
                                            </div>     
                                        ))}
                                        </div>
                                     ) : (
                                        <div className="card">
                                        <div className="bg-light p-4 text-center">
                                        <h5> No Inspections Today</h5>
                                        </div>
                                        </div>
                                    )}        
                            </div> 
                        </div>                  
                   
               
                    <div className="col-lg-6 col-sm-12">
                        <h3 className="text-center mt-4">Calendar</h3>
                        <div className="p-3 bg-dark rounded">
                            <div className="card">
                                <div className="card-body bg-light">
                                    <Calendar>
                                      events={calendar}
                                    </Calendar>
                                </div>
                            </div>
                        </div>
                    </div>
                    {upcoming.length ? (
                    <div className="col-lg-12 col-sm-12">
                        <h3 className="text-center mt-4">Upcoming Inspections</h3>
                                {upcoming.map(card => (  
                                    <div className="mt-2 p-3 bg-dark rounded">
                                        <h4 className="text-white">
                                            <p className= "">{Moment(card.date).format("dddd, MMMM Do YYYY").toString()}</p>
                                            <p className= "">Inspections: &nbsp;{card.inspections.length} </p>
                                        </h4>
                                    {card.inspections.map(inspection => (
                                           <div className="card p-2">
                                            <div className= "pb-0 card-body mb-0 container col-12 ">
                                                <Upcoming key={inspection.permit_id}
                                                    id={inspection.id}
                                                    class = {inspection.classname}
                                                    date={Moment(inspection.date).format("ddd, MMMM Do")}
                                                    address={inspection.address}
                                                    type={inspection.type}
                                                    permit_id={inspection.permit_id}
                                                    admin={inspection.admin}
                                                    date_scheduled={Moment(inspection.date_scheduled).format("l")}
                                                />
                                                {inspection.notes.length ? (
                                                     <div className="p-2 class">
                                                        <div className="row mb-4 ">
                                                            <div className="col-12 col-md-auto ">Notes: </div> 
                                                                {inspection.notes.map(note => (
                                                                    <Notes 
                                                                         note = {note.note}/>
                                                                ))}
                                                        </div>
                                                    </div>

                                                ) : (
                                                <div className="row">
                                                    <div className="col- col-md-10"></div>
                                                </div>    
                                            )}
                                        </div>
                                    </div>  
                                    ))}
                                    </div> 
                                ))}
                            </div>                  
                    ) : (
                        <h3> No Notes to Display</h3>
                        )}
            </div>
        </div>
     </div>         
        
    )

};

export default Dashboard;