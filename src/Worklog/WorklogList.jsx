import React from "react";
import "./WorklogList.scss";
import Worklog from "./Worklog";
import { connect } from "react-redux";

function WorklogList({ worklogs }) {
  // const worklogs = [
  //   {
  //     name: "nameWorklog",
  //     issue: "JRM-312",
  //     started: 640,
  //     ended: 690,
  //     status: "",
  //   },
  //   {
  //     name: "nameWorklog",
  //     issue: "JRM-311",
  //     started: 700,
  //     ended: 730,
  //     status: "",
  //   },
  // ];

  return (
    <ul className="worklogs-list">
      {worklogs.map((worklog, index) => (
        <Worklog worklog={worklog} key={index} index={index} />
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    worklogs: state.worklogs,
  };
};

export default connect(mapStateToProps, null)(WorklogList);
