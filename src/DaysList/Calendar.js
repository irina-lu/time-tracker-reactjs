import React from "react";
import "./Calendar.scss";

function Calendar() {
  return (
    <section class="calendar">
      <h2 class="calendar__month">June</h2>
      <ul class="calendar__weekdays-list">
        <li class="calendar__weekday">S</li>
        <li class="calendar__weekday">M</li>
        <li class="calendar__weekday">T</li>
        <li class="calendar__weekday">W</li>
        <li class="calendar__weekday">T</li>
        <li class="calendar__weekday">F</li>
        <li class="calendar__weekday">S</li>
      </ul>
      <ul class="calendar__days-list">
        <li class="calendar__day calendar__day_another-month">29</li>
        <li class="calendar__day calendar__day_another-month">30</li>
        <li class="calendar__day calendar__day_another-month">31</li>
        <li class="calendar__day">1</li>
        <li class="calendar__day">2</li>
        <li class="calendar__day">3</li>
        <li class="calendar__day calendar__day_in-progress">4</li>
        <li class="calendar__day calendar__day_missed">5</li>
        <li class="calendar__day calendar__day_in-progress">6</li>
        <li class="calendar__day">7</li>
        <li class="calendar__day">8</li>
        <li class="calendar__day">9</li>
        <li class="calendar__day calendar__day_in-progress">10</li>
        <li class="calendar__day calendar__day_missed">11</li>
        <li class="calendar__day calendar__day_missed">12</li>
        <li class="calendar__day calendar__day_missed">13</li>
        <li class="calendar__day calendar__day_missed">14</li>
        <li class="calendar__day calendar__day_missed">15</li>
        <li class="calendar__day calendar__day_missed">16</li>
        <li class="calendar__day">17</li>
        <li class="calendar__day calendar__day_missed">18</li>
        <li class="calendar__day calendar__day_in-progress">19</li>
        <li class="calendar__day">20</li>
        <li class="calendar__day">21</li>
        <li class="calendar__day calendar__day_in-progress calendar__day_chosen">
          22
        </li>
        <li class="calendar__day calendar__day_in-progress">23</li>
        <li class="calendar__day">24</li>
        <li class="calendar__day calendar__day_in-progress">25</li>
        <li class="calendar__day">26</li>
        <li class="calendar__day">27</li>
        <li class="calendar__day">28</li>
        <li class="calendar__day">29</li>
        <li class="calendar__day">30</li>
        <li class="calendar__day calendar__day_another-month">1</li>
        <li class="calendar__day calendar__day_another-month">2</li>
      </ul>
      <div class="calendar__statuses-wrapper">
        <p class="calendar__status">Done</p>
        <p class="calendar__status calendar__status_in-progress">In progress</p>
        <p class="calendar__status calendar__status_missed">Missed</p>
      </div>
    </section>
  );
}

export default Calendar;
