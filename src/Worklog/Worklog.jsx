import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { changeName } from "../redux/actions";
import { changeIssue } from "../redux/actions";
import "./Worklog.scss";
import WorklogOptions from "../WorklogOptions/WorklogOptions";

function Worklog({ date, worklog, index, changeName, changeIssue }) {
  const [nameWorklog, setNameWorklog] = useState(worklog.name);
  const [nameIssue, setNameIssue] = useState(worklog.issue);

  const today = date;

  function handleChangeWorklog(e) {
    let name = e.target.value;
    setNameWorklog(e.target.value);
    changeWorklogName(name);
  }

  function changeWorklogName(name) {
    const newName = {
      id: index,
      name: name,
    };
    // changeName(newName, today);
  }

  function handleChangeIssue(e) {
    let issue = e.target.value;
    // setNameIssue(e.target.value);
    // changeWorklogIssue(issue);
  }

  function changeWorklogIssue(issue) {
    const newIssue = {
      id: index,
      issue: issue,
    };
    // changeIssue(newIssue, today);
  }

  function minuteToHour(value) {
    let hours = Math.floor(value / 60)
      .toString()
      .padStart(2, "0");
    let minutes = (value - hours * 60).toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const time = worklog.ended - worklog.started;

  return (
    <li className="worklog__wrapper">
      <div className="worklog">
        <p className="worklog__interval-time">
          {minuteToHour(worklog.started)}
          <span className="worklog__interval-time_gray">
            {" "}
            — {minuteToHour(worklog.ended)}
          </span>
        </p>
        <span className="worklog__status"></span>
        <div className="worklog__name-wrapper">
          {/* <input
            className="worklog__code-issue"
            name="issue-name"
            defaultValue={worklog.issue}
            onChange={handleChangeIssue}
            autoComplete="off"
          /> */}
          <span className="worklog__code-issue">{worklog.issue}</span>
          {/* <input
            className="worklog__name"
            name="worklog-name"
            defaultValue={worklog.name}
            onChange={handleChangeWorklog}
            autoComplete="off"
          /> */}
          <p className="worklog__name">{worklog.name}</p>
        </div>
        <span className="worklog__time">{`${minuteToHour(time)}:00`}</span>
        <button className="worklog__btn">
          <span className="visually-hidden">Play</span>
        </button>
      </div>
      <div className="worklog__on-hover">
        <button className="worklog__options-btn">
          <span className="worklog__btn-round"></span>
        </button>
      </div>
      <div className="worklog__menu-wrapper">
        <WorklogOptions date={date} index={index} />
      </div>
    </li>
  );
}

const mapDispatchToProps = {
  changeName,
  changeIssue,
};

export default connect(null, mapDispatchToProps)(Worklog);
