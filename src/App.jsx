import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import PopupNewWorklog from "./Modal/PopupNewWorklog";
import Notification from "./Modal/Notification";
import { connect } from "react-redux";

function App(props) {
  const [nameWorklog, setNameWorklog] = useState("");
  const [nameIssue, setNameIssue] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  function updateInfoWorklog(nameWorklog, nameIssue) {
    setNameWorklog(nameWorklog);
    setNameIssue(nameIssue);
  }

  function getTime(startTime, endTime) {
    setStartTime(startTime);
    setEndTime(endTime);
  }

  return (
    <div className="time-tracker-app">
      <Header />
      <Main updateInfoWorklog={updateInfoWorklog} getTime={getTime} />
      {props.isStoppedTimer ? (
        <PopupNewWorklog
          nameWorklog={nameWorklog}
          nameIssue={nameIssue}
          startTime={startTime}
          endTime={endTime}
        />
      ) : null}
      {/* <Notification /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isStoppedTimer: state.popup };
};

export default connect(mapStateToProps, null)(App);
