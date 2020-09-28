import React, { useState } from "react";
import "./MainScreen.scss";
import MainScreenHeading from "./MainScreenHeading";
import DaysList from "../Day/DaysList";
import Favorite from "./Favorite";

function MainScreen(props) {
  const [isAll, setAll] = useState(true);

  function setFilter(isAll) {
    return setAll(isAll);
  }

  return (
    <section className="page-main__day-list days-list">
      <h2 className="visually-hidden">Main screen</h2>
      <MainScreenHeading setFilter={setFilter} />
      {isAll ? <DaysList handleClick={props.handleClick} /> : <Favorite />}
    </section>
  );
}

export default MainScreen;
