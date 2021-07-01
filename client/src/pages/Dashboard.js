import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import ActionRequiredBanner from "../components/dashboard/ActionRequiredBanner";
import Today from "../components/dashboard/TodayInspections";
import Calendar from "../components/dashboard/Calendar";
import {
  Upcoming,
  DateCard,
  Heading,
} from "../components/dashboard/UpcomingInspections";
import Moment from "moment";
import API from "../utils/API";
import { getUser } from "../utils/Session";
import { DayCellContent } from "@fullcalendar/react";

function Dashboard() {
  const [inspections, setInspections] = useState([]);

  let presentcounter;
  let futurecounter;
  let present;
  let future;
  // const getInspectionData = () => {
  //     API.getInspections()
  //         .then(res => {
  //             console.log('===========')
  //             console.log(res)
  //             console.log('===========')
  //         })
  //         .then(res => setTodayInspections(res))
  //         .catch(error => console.log(error))
  // }

  const history = useHistory();

  useEffect(() => {
    if (getUser() != null) {
      loadInspections();
    } else {
      history.push("/login");
    }
  }, []);

  async function loadInspections() {
    await API.getInspections()
      .then((res) => {
        setInspections(res.data);
      })
      .catch((err) => console.log(err));
  }

  present = [];
  future = [];
  inspections.forEach((inspection) => {
    if (Moment(inspection.date).isAfter(Moment(), "day")) {
      future.push(inspection);
    } else if (Moment(inspection.date).isSame(Moment(), "day")) {
      present.push(inspection);
    }
  });
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
      inspections: grouped[date],
    };
  });

  console.log(upcoming);

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Nav />
      {present.length ? <ActionRequiredBanner /> : null}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <h2 className="text-center mt-4">Today's Inspections</h2>
            {present.length ? (
              <div className="border border-3 p-3 bg-dark rounded">
                <h4 className="text-white">
                  <span className="mr-4">
                    {Moment().format("dddd, MMMM Do YYYY").toString()}
                  </span>
                  <span className="ml-4">
                    {present.length} Inspections Today
                  </span>
                </h4>
                {present.map((inspection) => (
                  <div className="card">
                    <div className="bg-light">
                      <Today
                        key={inspection.id}
                        id={inspection.id}
                        length={present.length}
                        date={Moment(inspection.date).format(
                          "dddd, MMMM Do YYYY"
                        )}
                        address={inspection.address}
                        type={inspection.type}
                        permit_id={inspection.permit_id}
                        admin={inspection.admin}
                        date_scheduled={Moment(
                          inspection.date_scheduled
                        ).format("MM- D-YY")}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h3> No Result to Display</h3>
            )}
          </div>
          <div className="col-lg-6 col-sm-12">
            <h2 className="text-center mt-4">Calendar</h2>
            <div className="border border-3 p-3 bg-dark rounded">
              <div className="card">
                <div className="card-body bg-light">
                  <Calendar></Calendar>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <h2 className="text-center mt-4">Upcoming Inspections</h2>
            {upcoming.length ? (
              <div>
                {upcoming.map((card) => (
                  <div className="border border-3 p-3 bg-dark rounded">
                    <Heading
                      date={Moment(card.date).format("dddd, MMMM Do YYYY")}
                      length={card.inspections.length}
                    />
                    <div className="card">
                      <div className="bg-light"></div>
                      <DateCard>
                        {card.inspections.map((inspection) => (
                          <Upcoming
                            key={inspection.permit_id}
                            id={inspection.id}
                            number={futurecounter++}
                            date={Moment(inspection.date).format(
                              "dddd, MMMM Do YYYY"
                            )}
                            address={inspection.address}
                            type={inspection.type}
                            permit_id={inspection.permit_id}
                            admin={inspection.admin}
                            date_scheduled={Moment(
                              inspection.date_scheduled
                            ).format("MM- D-YY")}
                          />
                        ))}
                      </DateCard>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <h3> No Result to Display</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
