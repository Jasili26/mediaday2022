
import React from "react";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import "./calendar.css";
import eventData from "../../data/events.json";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";


const Calendar = () => (
  <div className="calendar-view">
    <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView="timeGrid"
      headerToolbar={false}
      slotMinTime="10:00:00"
      slotMaxTime="19:00:00"
      height={550}
      views={{
          timeFormat: 'H:mm',
        timeGrid: {
          visibleRange: {
            start: "2022-04-01",
            end: "2022-04-02",
          },
        },
      }}
      events={eventData.events.map((data) => {
        const [day, month, year] = data.startDate.split(".").map(Number);
        const [hour, minute] = data.startTime.split(":").map(Number);
          document.title = "Kalenteri"


        return {
          title: data.name + ' - ' + data.title,
          start: new Date(year, month - 1, day, hour, minute),
          end: new Date(year, month - 1, day, hour + 1, minute),
          url: `#/event/${data.videoUrl}`,
        };
      })}
    />
      <Link to="event/testkooste">

          <Button variant="danger" size="sm">
              TESTI KOOSTE
          </Button>

      </Link>
  </div>
);

export default Calendar;
