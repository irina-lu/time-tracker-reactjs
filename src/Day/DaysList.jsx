import React, { useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { createDay } from "../redux/actions";
import "./DaysList.scss";
import Day from "./Day";

function DaysList({ createDay, day }) {
  let todayDate = moment().format("YYYY-MM-DD");
  useEffect(() => {
    createDay(todayDate);
  }, []);

  let displayNone;

  const isDisable = true;
  const disableClass = { opacity: "0.5", cursor: "auto" };

  return (
    <div>
      {Object.entries(day).map((day, index) => {
        if (todayDate !== day[0] && day[1].length < 1) {
          displayNone = { display: "none" };
          return (
            <Day
              displayNone={displayNone}
              day={day}
              key={index}
              isDisable={isDisable}
              disableClass={disableClass}
            />
          );
        } else if (todayDate !== day[0]) {
          return (
            <Day
              day={day}
              key={index}
              isDisable={isDisable}
              disableClass={disableClass}
            />
          );
        } else {
          return <Day day={day} key={index} />;
        }
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    day: state.day,
  };
};

const mapDispatchToProps = {
  createDay,
};

export default connect(mapStateToProps, mapDispatchToProps)(DaysList);
