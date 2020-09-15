import React from "react";
import "./MainScreen.scss";
import MainScreenHeading from "./MainScreenHeading";
import DaysList from "../Day/DaysList";

function MainScreen() {
  return (
    <section className="page-main__day-list days-list">
      <h2 className="visually-hidden">Main screen</h2>
      <MainScreenHeading />
      <DaysList />
      {/* <Favorive /> */}
    </section>
  );
}

export default MainScreen;
