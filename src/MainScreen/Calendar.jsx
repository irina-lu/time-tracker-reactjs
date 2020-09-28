import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.scss";

function ReactCalendar() {
  const [date, setDate] = useState(new Date());

  function onChange(date) {
    setDate(date);
  }

  return (
    <Calendar
      value={date}
      onChange={onChange}
      locale="EN"
      calendarType="US"
      minDetail={"month"}
      formatShortWeekday={(locale, date) =>
        ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
      }
      formatMonthYear={(locale, date) =>
        [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ][date.getMonth()]
      }
    />
  );
}

export default ReactCalendar;
