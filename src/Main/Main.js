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
        openPopup={props.openPopup}
        updateInfoWorklog={props.updateInfoWorklog}
      />
      <GoogleSync />
    </main>
  );
}

export default Main;
