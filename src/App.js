import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import PopupNewWorklog from "./Modal/PopupNewWorklog";
import Notification from "./Modal/Notification";

function App() {
  const [isStoppedTimer, setStoppedTimer] = useState(false);

  function openPopup(isStoppedTimer) {
    setStoppedTimer(isStoppedTimer);
  }

  return (
    <div className="time-tracker-app">
      <Header />
      <Main openPopup={openPopup} />
      {isStoppedTimer ? <PopupNewWorklog openPopup={openPopup} /> : null}
      {/* <Notification /> */}
    </div>
  );
}

export default App;
