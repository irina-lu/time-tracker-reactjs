import React from "react";
import "./TimeTracking.scss";
import WorklogOptions from "../WorklogOptions/WorklogOptions";
import NewWorklog from "./NewWorklog";
import ActiveWorklog from "./ActiveWorklog";

function TimeTracking() {
  return (
    <section className="time-tracking">
      <div className="time-tracking__title-wrapper">
        <h2 className="time-tracking__title">Time tracking</h2>
        <button className="time-tracking__options">
          <span className="visually-hidden">Options</span>
          <span className="time-tracking__round"></span>
        </button>
        <div class="time-tracking__menu-wrapper">
          <WorklogOptions />
        </div>
      </div>
      <NewWorklog />
      {/* <ActiveWorklog /> */}
    </section>
  );
}

export default TimeTracking;
