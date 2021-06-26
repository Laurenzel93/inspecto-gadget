import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { render } from "preact";

export default class Calendar extends React.Component {
    render() {
        return (
            <FullCalendar
                plugins={[dayGridPlugin]}
                eventContent={renderEventContent}
            />
        )
    }
}

function renderEventContent(eventInfo) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}