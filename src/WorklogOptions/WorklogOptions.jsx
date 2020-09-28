import React from "react";
import { connect } from "react-redux";
import { deleteWorklog } from "../redux/actions";
import "./WorklogOptions.scss";

function WorklogOptions({ date, index, deleteWorklog }) {
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
        <button
          className="worklog-options__btn"
          onClick={() => deleteWorklog(date, index)}
        >
          Delete
        </button>
      </li>
    </ul>
  );
}

const mapDispatchToProps = {
  deleteWorklog,
};

export default connect(null, mapDispatchToProps)(WorklogOptions);
