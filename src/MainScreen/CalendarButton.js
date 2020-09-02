import React from "react";
import "./CalendarButton.scss";
import Calendar from "./Calendar";

function CalendarButton() {
  return (
    <div className="day-list__calendar-wrapper">
      <button className="heading-btn days-list__calendar">10 JUNE 2020</button>
      <Calendar />
    </div>
  );
}

export default CalendarButton;
