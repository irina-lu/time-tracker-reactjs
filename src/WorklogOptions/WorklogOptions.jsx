import React from "react";
import "./WorklogOptions.scss";

function WorklogOptions({ date, index }) {
  return (
    <ul className="worklog-options">
      <li className="worklog-options__item">
        <button className="worklog-options__btn">Jira link</button>
      </li>
      <li className="worklog-options__item">
        <button className="worklog-options__btn">Duplicate</button>
      </li>
      <li className="worklog-options__item">
        <button className="worklog-options__btn">Add to favorite</button>
      </li>
      <li className="worklog-options__item">
        <button className="worklog-options__btn">Delete</button>
      </li>
    </ul>
  );
}

export default WorklogOptions;
