import React, { useState } from "react";
import "./MainScreenHeading.scss";
import CalendarButton from "./CalendarButton";

function MainScreenHeading({ setFilter }) {
  const [isAll, setAll] = useState(true);

  function clickToAll() {
    setAll(true);
    setFilter(true);
  }

  function clickToFavorite() {
    setAll(false);
    setFilter(false);
  }

  return (
    <div className="days-list__heading">
      <CalendarButton />
      <button
        className={`heading-btn day__filter day__filter_margin ${
          !isAll ? "" : "day__filter_active"
        }`}
        onClick={clickToAll}
      >
        All
      </button>
      <button
        className={`heading-btn day__filter ${
          isAll ? "" : "day__filter_active"
        }`}
        onClick={clickToFavorite}
      >
        Favorites
      </button>
    </div>
  );
}

export default MainScreenHeading;
