import React, { useState } from "react";
import { connect } from "react-redux";
import { changeName } from "../redux/actions";
import { changeIssue } from "../redux/actions";
import "./SublistWorklog.scss";
import WorklogOptions from "../WorklogOptions/WorklogOptions";

function SublistWorklog({ date, worklog, index, changeName, changeIssue }) {
  const [isClick, setClick] = useState(false);

  function minuteToHour(value) {
    let hours = Math.floor(value / 60)
      .toString()
      .padStart(2, "0");
    let minutes = (value - hours * 60).toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  const time = worklog.ended - worklog.started;

  function handleChangeWorklog(e) {
    setClick(true);
  }

  function saveName(e) {
    let name;
    if (e.key === "Enter") {
      if (e.target.tagName.toUpperCase() === "INPUT") {
        if (e.target.value === "") {
          name = worklog.name;
        } else {
          name = e.target.value;
        }
        setClick(false);
        const newName = {
          id: index,
          name: name,
          status: "",
        };
        changeName(newName, date);
      }
    }
  }

  function handleChangeIssue(e) {
    setClick(true);
  }

  function saveIssue(e) {
    if (e.key === "Enter") {
      if (e.target.tagName.toUpperCase() === "INPUT") {
        let issue = e.target.value;
        setClick(false);
        const newIssue = {
          id: index,
          issue: issue,
          status: "",
        };
        changeIssue(newIssue, date);
      }
    }
  }

  return (
    <li>
      <div className="worklog__wrapper">
        <div className="sublist-worklog">
          <p className="worklog__interval-time">
            {minuteToHour(worklog.started)}
            <span className="worklog__interval-time_gray">
              {" "}
              — {minuteToHour(worklog.ended)}
            </span>
          </p>
          <span
            className={`worklog__status worklog__status_${worklog.status}`}
          ></span>
          <div className="worklog__name-wrapper">
            {isClick ? (
              <input
                className="worklog__code-issue"
                name="issue-name"
                defaultValue={worklog.issue}
                onKeyPress={saveIssue}
                autoComplete="off"
                autoFocus
              />
            ) : (
              <span className="worklog__code-issue" onClick={handleChangeIssue}>
                {worklog.issue}
              </span>
            )}
            {isClick ? (
              <input
                className="worklog__name"
                name="worklog-name"
                defaultValue={worklog.name}
                onKeyPress={saveName}
                autoComplete="off"
                autoFocus
              />
            ) : (
              <p className="worklog__name" onClick={handleChangeWorklog}>
                {worklog.name}
              </p>
            )}
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
      </div>
    </li>
  );
}

const mapDispatchToProps = {
  changeName,
  changeIssue,
};

export default connect(null, mapDispatchToProps)(SublistWorklog);
