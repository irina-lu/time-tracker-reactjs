import React from "react";
import moment from "moment";
import "./Day.scss";
import TimePicker from "./TimePicker";
import WorklogList from "../Worklog/WorklogList";

function Day({ day, displayNone, isDisable, disableClass }) {
  // const today = moment().format("YYYY-MM-DD");
  // let displayNone;

  // if (today !== day[0] && day[1].length < 1) {
  //   displayNone = { display: "none" };
  //   return displayNone;
  // } else {
  //   console.log(false);
  // }

  const date = moment(day[0], "YYYY-MM-DD").format("ddd MMMM DD").split(" ");
  const [dayOfWeek, month, dayOfMonth] = date;

  function minuteToHour(value) {
    let hours = Math.floor(value / 60)
      .toString()
      .padStart(2, "0");
    let minutes = (value - hours * 60).toString().padStart(2, "0");
    if (hours >= "08") return `08:00`;
    return `${hours}:${minutes}`;
  }

  function getTimes() {
    let times = [];
    day[1].map((item) => {
      let time = item.ended - item.started;
      times.push(time);
    });
    return times;
  }

  const times = getTimes();
  let timesSum = times.reduce((sum, current) => sum + current, 0);
  let totalTime = minuteToHour(timesSum);

  function countPercent() {
    let percent = Math.trunc((timesSum * 100) / 480);
    if (percent >= 100) {
      return { width: `100%`, backgroundColor: "#62d2b1" };
    } else {
      return { width: `${percent}%` };
    }
  }
  let percent = countPercent();

  return (
    <section className="day-list__item day" style={displayNone}>
      <div className="day__heading-wrapper">
        <h3 className="day__date">
          {dayOfWeek},{" "}
          <span className="day__date_not-bold">
            {month} {dayOfMonth}
          </span>
        </h3>
        <div className="day__total-time-wrapper">
          <p className="day__total-time">{`${totalTime}:00`}</p>
          <div className="day__progress-bar">
            <div className="day__progress-value" style={percent}></div>
          </div>
        </div>
        <button
          className="day__btn-download"
          disabled={isDisable}
          style={disableClass}
        >
          <span className="visually-hidden">Download</span>
        </button>
      </div>
      <WorklogList date={day[0]} worklogs={day[1]} />
      <TimePicker />
    </section>
  );
}

export default Day;
