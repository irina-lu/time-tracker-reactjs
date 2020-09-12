import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import PopupNewWorklog from "./Modal/PopupNewWorklog";
import Notification from "./Modal/Notification";

function App() {
  const [isStoppedTimer, setStoppedTimer] = useState(false);
  const [nameWorklog, setNameWorklog] = useState("");
  const [nameIssue, setNameIssue] = useState("");

  function openPopup(isStoppedTimer) {
    setStoppedTimer(isStoppedTimer);
  }

  function updateInfoWorklog(nameWorklog, nameIssue) {
    setNameWorklog(nameWorklog);
    setNameIssue(nameIssue);
  }

  return (
    <div className="time-tracker-app">
      <Header />
      <Main openPopup={openPopup} updateInfoWorklog={updateInfoWorklog} />
      {isStoppedTimer ? (
        <PopupNewWorklog
          openPopup={openPopup}
          nameWorklog={nameWorklog}
          nameIssue={nameIssue}
        />
      ) : null}
      {/* <Notification /> */}
    </div>
  );
}

export default App;
