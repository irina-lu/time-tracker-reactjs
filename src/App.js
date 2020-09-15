import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import PopupNewWorklog from "./Modal/PopupNewWorklog";
import Notification from "./Modal/Notification";

function App() {
  const [isStoppedTimer, setStoppedTimer] = useState(false);
  const [nameWorklog, setNameWorklog] = useState("");
  const [nameIssue, setNameIssue] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  function openPopup(isStoppedTimer) {
    setStoppedTimer(isStoppedTimer);
  }

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
      <Main
        openPopup={openPopup}
        updateInfoWorklog={updateInfoWorklog}
        getTime={getTime}
      />
      {isStoppedTimer ? (
        <PopupNewWorklog
          openPopup={openPopup}
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

export default App;
