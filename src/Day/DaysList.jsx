import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createDay } from "../redux/actions";
import moment from "moment";
import "./DaysList.scss";
import Day from "./Day";

function DaysList({ createDay, day }) {
  useEffect(() => {
    const todayDate = moment().format("YYYY-MM-DD");
    createDay(todayDate);
  }, []);

  return (
    <div>
      {Object.entries(day).map((day, index) => (
        <Day day={day} key={index} />
      ))}
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
