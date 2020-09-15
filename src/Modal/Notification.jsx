import React from "react";
import "./Notification.scss";

function Notification() {
  return (
    <section className="notification">
      <h2 className="visually-hidden">Notification message</h2>
      <div className="notification__status-wrapper">
        <span className="notification__status"></span>
        <button className="notification__btn-close"></button>
      </div>
      <p className="notification__message">
        Nothing to log. Please check issues assignment or description.
      </p>
    </section>
  );
}

export default Notification;
