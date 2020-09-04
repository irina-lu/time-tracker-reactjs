import React from "react";
import "./ActiveWorklog.scss";

function ActiveWorklog() {
  return (
    <div className="active-worklog">
      <p className="active-worklog__input-wrapper">
        <label
          className="active-worklog__label visually-hidden"
          for="worklog-name"
        >
          Add worklog name
        </label>
        <input
          type="text"
          className="active-worklog__input"
          id="worklog-name"
          name="worklog-name"
          placeholder="Add worklog name"
          value="Meeting with QA"
        />
      </p>
      <p className="active-worklog__input-wrapper">
        <label
          className="active-worklog__label visually-hidden "
          for="issue-name"
        >
          Add issue
        </label>
        <input
          type="text"
          className="active-worklog__input"
          id="issue-name"
          name="issue-name"
          placeholder="Add issue"
        />
      </p>
      <span className="active-worklog__timer">01:15:00</span>
      <div className="active-worklog__btn-wrapper">
        <button className="active-worklog__btn active-worklog__btn-stop">
          <span className="visually-hidden">Stop</span>
        </button>
        <button className="active-worklog__btn active-worklog__btn-pause active-worklog__btn-pause_run">
          <span className="visually-hidden">Pause</span>
        </button>
      </div>
    </div>
  );
}

export default ActiveWorklog;
