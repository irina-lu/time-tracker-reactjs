import React from "react";
import "./MainScreenHeading.scss";
import CalendarButton from "./CalendarButton";

function MainScreenHeading() {
  return (
    <div className="days-list__heading">
      <CalendarButton />
      <button className="heading-btn day__filter day__filter_margin day__filter_active">
        All
      </button>
      <button className="heading-btn day__filter">Favorites</button>
    </div>
  );
}

export default MainScreenHeading;
