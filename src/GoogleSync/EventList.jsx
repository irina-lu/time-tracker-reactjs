import React from "react";
import "./EventList.scss";
import Event from "./Event";

function EventList(props) {
  return (
    <ul className="event-list">
      {props.eventList.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
