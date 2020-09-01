import React from "react";
import "./Main.scss";
import DaysList from "../DaysList/DaysList";

function Main() {
  return (
    <main className="page-main">
      <h1 className="visually-hidden">Time Tracker</h1>
      <DaysList />
      {/* <TimeTracking /> */}
      {/* <GoogleSync /> */}
    </main>
  );
}

export default Main;
