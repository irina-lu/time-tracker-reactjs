import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import PopupNewWorklog from "./Modal/PopupNewWorklog";
import Notification from "./Modal/Notification";
import { connect } from "react-redux";
import PopupDeleteWorklog from "./Modal/PopupDeleteWorklog";

function App(props) {
  const [nameWorklog, setNameWorklog] = useState("");
  const [nameIssue, setNameIssue] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [open, setOpen] = React.useState(false);

  function updateInfoWorklog(nameWorklog, nameIssue) {
    setNameWorklog(nameWorklog);
    setNameIssue(nameIssue);
  }

  function getTime(startTime, endTime) {
    setStartTime(startTime);
    setEndTime(endTime);
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="time-tracker-app">
      <Header />
      <Main
        updateInfoWorklog={updateInfoWorklog}
        getTime={getTime}
        handleClick={handleClick}
      />
      {props.isStoppedTimer ? (
        <PopupNewWorklog
          nameWorklog={nameWorklog}
          nameIssue={nameIssue}
          startTime={startTime}
          endTime={endTime}
          handleClick={handleClick}
          handleClose={handleClose}
        />
      ) : null}
      <Notification open={open} handleClose={handleClose} />
      {/* <PopupDeleteWorklog /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isStoppedTimer: state.popup };
};

export default connect(mapStateToProps, null)(App);
