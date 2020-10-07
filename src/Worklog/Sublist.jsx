import React from "react";
import SublistWorklog from "./SublistWorklog";
import "./Sublist.scss";

function Sublist({ array, date }) {
  return (
    <ul className="sublist">
      {array.map((worklog, index) => (
        <SublistWorklog
          worklog={worklog}
          key={index}
          index={index}
          date={date}
        />
      ))}
    </ul>
  );
}
export default Sublist;
