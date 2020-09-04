import React from "react";
import "./Main.scss";
import MainScreen from "../MainScreen/MainScreen";
import TimeTracking from "../TimeTracking/TimeTracking";

function Main() {
  return (
    <main className="page-main">
      <h1 className="visually-hidden">Time Tracker</h1>
      <MainScreen />
      <TimeTracking />
      {/* <GoogleSync /> */}
    </main>
  );
}

export default Main;
