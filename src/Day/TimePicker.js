import React from "react";
import "./TimePicker.scss";

function TimePicker() {
  return (
    <div className="time-picker">
      <div className="time-picher__range"></div>
      <ul className="time-picher__time-list">
        <li>07:00</li>
        <li>08:00</li>
        <li>09:00</li>
        <li>10:00</li>
        <li>11:00</li>
        <li>12:00</li>
        <li>13:00</li>
        <li>14:00</li>
        <li>15:00</li>
        <li>16:00</li>
        <li>17:00</li>
        <li>18:00</li>
        <li>19:00</li>
      </ul>
    </div>
  );
}

export default TimePicker;
