import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createDay } from "../redux/actions";
import moment from "moment";
import "./DaysList.scss";
import Day from "./Day";

function DaysList({ createDay, day }) {
  // `${today.getMonth() + 1}.${today.getDate()}.${today.getFullYear()}`
  // "9.21.2020"

  useEffect(() => {
    const todayDate = moment().format("YYYY-MM-DD");
    createDay(todayDate);
  }, []);

  localStorage.setItem("days", JSON.stringify(day));

  const today = moment().format("ddd MMMM DD").split(" ");
  return (
    <div>
      <Day today={today} />
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
