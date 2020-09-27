import React from "react";
import "./MainScreenHeading.scss";
import CalendarButton from "./CalendarButton";

function MainScreenHeading({ setFilter }) {
  const isAll = false;

  return (
    <div className="days-list__heading">
      <CalendarButton />
      <button
        className={`heading-btn day__filter day__filter_margin ${
          !isAll ? "" : "day__filter_active"
        }`}
      >
        All
      </button>
      <button
        className={`heading-btn day__filter ${
          isAll ? "" : "day__filter_active"
        }`}
      >
        Favorites
      </button>
    </div>
  );
}

export default MainScreenHeading;
