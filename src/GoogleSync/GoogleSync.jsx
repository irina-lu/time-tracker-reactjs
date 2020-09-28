import React from "react";
import { connect } from "react-redux";
import "./GoogleSync.scss";
import EventList from "./EventList";
import { enableSync } from "../redux/actions";

function GoogleSync({ enableSync, sync }) {
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

  function toggleHandler() {
    enableSync();
  }

  return (
    <section className="google-sync">
      <div className="google-sync__title-wrapper">
        <h2 className="google-sync__title">Google calendar sync</h2>
        <input
          id="google-check"
          className="visually-hidden google-sync__checkbox"
          type="checkbox"
          name="sync-checkbox"
          defaultChecked={!!sync}
        />
        <label
          htmlFor="google-check"
          className="google-sync__label"
          onClick={toggleHandler}
        ></label>
        <button className="google-sync__calendar">
          <span className="visually-hidden">Open calendar</span>
        </button>
      </div>
      {sync ? <EventList eventList={eventList} /> : null}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    sync: state.sync,
  };
};

const mapDispachToProps = {
  enableSync,
};

export default connect(mapStateToProps, mapDispachToProps)(GoogleSync);
