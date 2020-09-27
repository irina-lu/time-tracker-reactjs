import React from "react";
import ReactCalendar from "./Calendar";
import "./CalendarButton.scss";

function CalendarButton() {
  return (
    <div className="day-list__calendar-wrapper">
      <button className="heading-btn days-list__calendar">10 JUNE 2020</button>
      <ReactCalendar />
    </div>
  );
}

export default CalendarButton;
