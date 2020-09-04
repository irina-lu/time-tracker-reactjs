import React from "react";
import "./GoogleSync.scss";
import EventList from "./EventList";

function GoogleSync() {
  const eventList = [
    {
      id: 1,
      name: "Logo redesign",
      time: "09:00 — 10:00",
      status: "turquoise",
    },
    {
      id: 2,
      name: "Meeting with CEO",
      time: "14:00 — 14:45",
      status: "orange",
    },
    { id: 3, name: "Brainstorm", time: "15:00 — 16:15", status: "lavender" },
  ];

  return (
    <section className="google-sync">
      <div className="google-sync__title-wrapper">
        <h2 className="google-sync__title">Google calendar sync</h2>
        <input
          id="google-check"
          className="visually-hidden google-sync__checkbox"
          type="checkbox"
          name="sync-checkbox"
        />
        <label for="google-check" className="google-sync__label"></label>
        <button className="google-sync__calendar">
          <span className="visually-hidden">Open calendar</span>
        </button>
      </div>
      <EventList eventList={eventList} />
    </section>
  );
}

export default GoogleSync;
