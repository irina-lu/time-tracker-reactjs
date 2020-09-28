import React from "react";
import "./WorklogList.scss";
import Worklog from "./Worklog";
import { connect } from "react-redux";

function WorklogList({ worklogs, date }) {
  return (
    <ul className="worklogs-list">
      {worklogs.map((worklog, index) => (
        <Worklog worklog={worklog} key={index} index={index} date={date} />
      ))}
    </ul>
  );
}
export default connect(null, null)(WorklogList);
