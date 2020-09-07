import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import PopupNewWorklog from "./Modal/PopupNewWorklog";
import Overlay from "./Modal/Overlay";
import Notification from "./Modal/Notification";

function App() {
  return (
    <div className="time-tracker-app">
      <Header />
      <Main />
      {/* <Overlay />
      <PopupNewWorklog />
      <Notification /> */}
    </div>
  );
}

export default App;
