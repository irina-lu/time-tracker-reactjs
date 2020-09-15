import React, { useState } from "react";
import "./TimeTracking.scss";
import WorklogOptions from "../WorklogOptions/WorklogOptions";
import NewWorklog from "./NewWorklog";
import ActiveWorklog from "./ActiveWorklog";
import { connect } from "react-redux";

function TimeTracking(props) {
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
      {props.isStartTamer ? (
        <ActiveWorklog
          updateInfoWorklog={props.updateInfoWorklog}
          getTime={props.getTime}
        />
      ) : (
        <NewWorklog />
      )}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    isStartTamer: state.timer,
  };
};

export default connect(mapStateToProps, null)(TimeTracking);
