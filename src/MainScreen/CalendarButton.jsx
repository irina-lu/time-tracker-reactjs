import React from "react";
import moment from "moment";
import ReactCalendar from "./Calendar";
import "./CalendarButton.scss";

function CalendarButton() {
  const todayDate = moment().format("DD MMMM YYYY");
  return (
    <div className="day-list__calendar-wrapper">
      <button className="heading-btn days-list__calendar">{todayDate}</button>
      <ReactCalendar />
    </div>
  );
}

export default CalendarButton;
