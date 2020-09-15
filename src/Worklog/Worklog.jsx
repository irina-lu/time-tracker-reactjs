import React from "react";
import "./Worklog.scss";
import WorklogOptions from "../WorklogOptions/WorklogOptions";

function Worklog() {
  return (
    <li className="worklog__wrapper">
      <div className="worklog">
        <p className="worklog__interval-time">
          09:00 <span className="worklog__interval-time_gray">— 10:00</span>
        </p>
        <span className="worklog__status"></span>
        <div className="worklog__name-wrapper">
          <span className="worklog__code-issue">JRM-310</span>
          <h4 className="worklog__name">Team standup</h4>
        </div>
        <div className="worklog__bar">
          <div className="worklog__value"></div>
        </div>
        <span className="worklog__time">01:00:00</span>
        <button className="worklog__btn">
          <span className="visually-hidden">Play</span>
        </button>
      </div>
      <div className="worklog__on-hover">
        <button className="worklog__options-btn">
          <span className="worklog__btn-round"></span>
        </button>
      </div>
      <div className="worklog__menu-wrapper">
        <WorklogOptions />
      </div>
    </li>
    // <li className="day__worklog-item-wrapper">
    //   <div className="day__worklog-item">
    //     <p className="day__interval-time">
    //       10:00 <span className="day__interval-time_gray">— 11:15</span>
    //     </p>
    //     <div className="day__worklog-name-wrapper day__worklog-name-wrapper_full">
    //       <span className="day__code">JRM-310</span>
    //       <h4 className="day__worklog-name">Meeting with QA</h4>
    //     </div>
    //     <div className="day__worklog-bar">
    //       <div className="day__worklog-value day__worklog-value_full"></div>
    //     </div>
    //     <span className="day__worklog-time">01:15:00</span>
    //     <button className="day__btn">
    //       <span className="visually-hidden">Play</span>
    //     </button>
    //   </div>
    //   <div className="day__on-hover">
    //     <button className="day__options-btn">
    //       <span className="day__btn-round"></span>
    //     </button>
    //   </div>
    //   <ul className="worklog-options day__worklog-menu">
    //     <li className="worklog-options__item">
    //       <button className="worklog-options__btn">Jira link</button>
    //     </li>
    //     <li className="worklog-options__item">
    //       <button className="worklog-options__btn">Duplicate</button>
    //     </li>
    //     <li className="worklog-options__item">
    //       <button className="worklog-options__btn">Add to favorite</button>
    //     </li>
    //     <li className="worklog-options__item">
    //       <button className="worklog-options__btn">Delete</button>
    //     </li>
    //   </ul>
    // </li>
    // <li className="day__worklog-item-wrapper">
    //   <div className="day__worklog-item">
    //     <div className="day__interval-time-btn">
    //       <span className="day__amount">2</span>
    //     </div>
    //     <div className="day__worklog-name-wrapper day__worklog-name-wrapper_in-progress">
    //       <span className="day__code">JRM-310</span>
    //       <h4 className="day__worklog-name">Company branding</h4>
    //     </div>
    //     <div className="day__worklog-bar">
    //       <div className="day__worklog-value day__worklog-value_in-progress"></div>
    //     </div>
    //     <span className="day__worklog-time">03:50:00</span>
    //     <button className="day__btn">
    //       <span className="visually-hidden">Play</span>
    //     </button>
    //   </div>
    //   <div className="day__on-hover">
    //     <button className="day__options-btn">
    //       <span className="day__btn-round"></span>
    //     </button>
    //   </div>
    //   <ul className="worklog-options day__worklog-menu">
    //     <li className="worklog-options__item">
    //       <button className="worklog-options__btn">Jira link</button>
    //     </li>
    //     <li className="worklog-options__item">
    //       <button className="worklog-options__btn">Duplicate</button>
    //     </li>
    //     <li className="worklog-options__item">
    //       <button className="worklog-options__btn">Add to favorite</button>
    //     </li>
    //     <li className="worklog-options__item">
    //       <button className="worklog-options__btn">Delete</button>
    //     </li>
    //   </ul>
    // </li>
  );
}

export default Worklog;
