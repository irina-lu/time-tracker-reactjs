import React from "react";
import moment from "moment";
import "./Day.scss";
import TimePicker from "./TimePicker";
import WorklogList from "../Worklog/WorklogList";
import { connect } from "react-redux";
import { setAllStatuses } from "../redux/actions";
import { openNotification } from "../redux/actions";

function Day({
  day,
  displayNone,
  isDisable,
  disableClass,
  setAllStatuses,
  openNotification,
  handleClick,
}) {
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

  function setStatus() {
    const correctIssues = ["JRM-310", "JRM-311", "JRM-312", "JRM-313"];
    const statuses = [];
    day[1].forEach((item) => {
      if (item.issue === "") {
        statuses.push("warning");
        showWarningStatus(
          "warning",
          "Nothing to log. Please check issues assignment or description."
        );
      } else if (!correctIssues.includes(item.issue)) {
        statuses.push("error");
        showWarningStatus("error", "Issue does not exist.");
      } else {
        statuses.push("done");
      }
    });
    const isAllItemsDone = statuses.every((item) => {
      return item === "done";
    });

    if (isAllItemsDone && statuses.length > 0) {
      showWarningStatus("done", "Your worklog successfully logged.");
    }
    setAllStatuses(statuses, day[0]);
  }

  function showWarningStatus(status, message) {
    const warningStatus = {
      status: status,
      message: message,
    };
    openNotification(warningStatus);
    handleClick();
  }

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
          onClick={setStatus}
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

const mapDispatchToProps = {
  setAllStatuses,
  openNotification,
};

export default connect(null, mapDispatchToProps)(Day);
