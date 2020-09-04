import React from "react";
import "./NewWorklog.scss";

function NewWorklog() {
  return (
    <div className="new-worklog">
      <button className="new-worklog__btn">
        <span className="visually-hidden">Add new worklog</span>
      </button>
      <p className="new-worklog__phrase">NEW WORKLOG</p>
    </div>
  );
}

export default NewWorklog;
