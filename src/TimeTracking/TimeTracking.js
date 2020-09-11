import React, { useState } from "react";
import "./TimeTracking.scss";
import WorklogOptions from "../WorklogOptions/WorklogOptions";
import NewWorklog from "./NewWorklog";
import ActiveWorklog from "./ActiveWorklog";

function TimeTracking(props) {
  const [isVisible, setVisible] = useState(true);

  function openTimer() {
    setVisible(!isVisible);
  }

  return (
    <section className="time-tracking">
      <div className="time-tracking__title-wrapper">
        <h2 className="time-tracking__title">Time tracking</h2>
        <button className="time-tracking__options">
          <span className="visually-hidden">Options</span>
          <span className="time-tracking__round"></span>
        </button>
        <div className="time-tracking__menu-wrapper">
          <WorklogOptions />
        </div>
      </div>
      {isVisible ? (
        <NewWorklog openTimer={openTimer} />
      ) : (
        <ActiveWorklog openPopup={props.openPopup} />
      )}
      {/* <NewWorklog startTimer={startTimer} isVisible={isVisible} />

      <ActiveWorklog isVisible={isVisible} /> */}
    </section>
  );
}

export default TimeTracking;
