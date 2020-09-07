import React from "react";
import "./PopupNewWorklog.scss";
import Slider from "./Slider";

function PopupNewWorklog() {
  return (
    <section className="popup-new-worklog">
      <h2 className="popup-new-worklog__title">New worklog</h2>
      <form className="popup-new-worklog__form" method="POST">
        <div className="popup-new-worklog__slider">
          <Slider />
        </div>
        <p className="popup-new-worklog__input-wrapper">
          <label className="popup-new-worklog__label" htmlFor="worklog">
            Worklog name
          </label>
          <input
            className="popup-new-worklog__input"
            id="worklog"
            name="worklog"
            placeholder="Enter the worklog name"
          />
        </p>
        <p className="popup-new-worklog__input-wrapper">
          <label className="popup-new-worklog__label" htmlFor="issue">
            Issue
          </label>
          <input
            className="popup-new-worklog__input"
            id="issue"
            name="issue"
            placeholder="Enter the issue name"
          />
        </p>
        <div className="popup-new-worklog__btn-wrapper">
          <button className="popup-new-worklog__submit">
            <span className="visually-hidden">Span</span>
          </button>
          <button className="popup-new-worklog__close" disabled>
            <span className="visually-hidden">Close</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default PopupNewWorklog;
