import React from "react";
import "./PopupNewWorklog.scss";
import Slider from "./Slider/Slider";

function PopupNewWorklog(props) {
  const isClosed = false;

  function closePopup(e) {
    e.preventDefault();
    props.openPopup(isClosed);
  }

  return (
    <div className="overlay">
      <section className="popup-new-worklog">
        <h2 className="popup-new-worklog__title">New worklog</h2>
        <form className="popup-new-worklog__form" method="POST">
          <div className="popup-new-worklog__slider">
            <Slider startTime={props.startTime} endTime={props.endTime} />
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
              defaultValue={props.nameWorklog}
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
              defaultValue={props.nameIssue}
            />
          </p>
          <div className="popup-new-worklog__btn-wrapper">
            <button className="popup-new-worklog__submit">
              <span className="visually-hidden">Span</span>
            </button>
            <button
              type="button"
              className="popup-new-worklog__close"
              onClick={closePopup}
            >
              <span className="visually-hidden">Close</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default PopupNewWorklog;
