import React from "react";
import "./Event.scss";

function Event({ event }) {
  let color;
  switch (event.status) {
    case "turquoise":
      color = "turquoise";
      break;
    case "orange":
      color = "orange";
      break;
    default:
      color = "lavender";
  }

  return (
    <li className={`event event_${color}`}>
      <h3 className="event__name">{event.name}</h3>
      <p className="event__time">{event.time}</p>
    </li>
  );
}

export default Event;
