import React from "react";
import "./Main.scss";
import MainScreen from "../MainScreen/MainScreen";
import TimeTracking from "../TimeTracking/TimeTracking";
import GoogleSync from "../GoogleSync/GoogleSync";

function Main(props) {
  return (
    <main className="page-main">
      <h1 className="visually-hidden">Time Tracker</h1>
      <MainScreen />
      <TimeTracking
        updateInfoWorklog={props.updateInfoWorklog}
        getTime={props.getTime}
      />
      <GoogleSync />
    </main>
  );
}

export default Main;
