import React from "react";
import "./CalendarButton.scss";
import Calendar from "./Calendar";

function CalendarButton() {
  return (
    <div class="day-list__calendar-wrapper">
      <button class="heading-btn days-list__calendar">10 JUNE 2020</button>
      <Calendar />
    </div>
  );
}

export default CalendarButton;
