import React from "react";
import "./DaysListHeading.scss";
import CalendarButton from "./CalendarButton";

function DaysListHeading() {
  return (
    <div class="days-list__heading">
      <CalendarButton />
      <button class="heading-btn day__filter day__filter_margin day__filter_active">
        All
      </button>
      <button class="heading-btn day__filter">Favorites</button>
    </div>
  );
}

export default DaysListHeading;
