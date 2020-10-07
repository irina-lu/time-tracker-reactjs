import React from "react";
import "./PopupDeleteWorklog.scss";

function PopupDeleteWorklog() {
  return (
    <div className="overlay">
      <section className="popup-delete-worklog">
        <h2 className="visually-hidden">Delete worklog</h2>
        <p className="popup-delete-worklog__message">
          Are you sure you want to delete the worklog?
        </p>
        <div className="popup-delete-worklog__btn-wrapper">
          <button className="popup-delete-worklog__submit">
            <span className="visually-hidden">Span</span>
          </button>
          <button
            type="button"
            className="popup-delete-worklog__close"
            // onClick={props.openPopup}
          >
            <span className="visually-hidden">Close</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default PopupDeleteWorklog;
