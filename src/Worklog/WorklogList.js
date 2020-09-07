import React from "react";
import "./WorklogList.scss";
import Worklog from "./Worklog";

function WorklogList() {
  return (
    <ul className="worklogs-list">
      <Worklog />
    </ul>
  );
}

export default WorklogList;
