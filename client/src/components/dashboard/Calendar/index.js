import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { render } from "preact";

export default class Calendar extends React.Component {
    render() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                events={this.props.children[1]}
                onLoad={console.log(this.props.children[1])}
            />
        )
    }
};
