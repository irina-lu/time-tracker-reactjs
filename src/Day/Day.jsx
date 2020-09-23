import React from "react";
import moment from "moment";
import "./Day.scss";
import TimePicker from "./TimePicker";
import WorklogList from "../Worklog/WorklogList";

function Day({ day }) {
  const today = moment(day[0], "YYYY-MM-DD").format("ddd MMMM DD").split(" ");
  const [dayOfWeek, month, dayOfMonth] = today;
  return (
    <section className="day-list__item day">
      <div className="day__heading-wrapper">
        <h3 className="day__date">
          {dayOfWeek},{" "}
          <span className="day__date_not-bold">
            {month} {dayOfMonth}
          </span>
        </h3>
        <div className="day__total-time-wrapper">
          <p className="day__total-time">06:05:00</p>
          <div className="day__progress-bar">
            <div className="day__progress-value"></div>
          </div>
        </div>
        <button className="day__btn-download">
          <span className="visually-hidden">Download</span>
        </button>
      </div>
      <WorklogList date={day[0]} worklogs={day[1]} />
      <TimePicker />
    </section>
  );
}

export default Day;
