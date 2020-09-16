import React, { useState } from "react";
import "./PopupNewWorklog.scss";
import Slider from "./Slider/Slider";
import { connect } from "react-redux";
import { openPopup } from "../redux/actions";
import { startTimer } from "../redux/actions";

function PopupNewWorklog(props) {
  const [nameWorklog, setNameWorklog] = useState(props.nameWorklog);
  const [nameIssue, setNameIssue] = useState(props.nameIssue);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  function update(start, end) {
    setStart(start);
    setEnd(end);
  }

  function submitHandler(e) {
    e.preventDefault();
    createNewWorklog();
    props.startTimer();
    props.openPopup();
  }

  function createNewWorklog() {
    const newWorklog = {
      name: nameWorklog,
      issue: nameIssue,
      started: start,
      ended: end,
    };

    console.log(newWorklog);
  }

  function hangleChangeWorklog(e) {
    setNameWorklog(e.target.value);
  }

  function hangleChangeIssue(e) {
    setNameIssue(e.target.value);
  }

  return (
    <div className="overlay">
      <section className="popup-new-worklog">
        <h2 className="popup-new-worklog__title">New worklog</h2>
        <form
          className="popup-new-worklog__form"
          method="POST"
          onSubmit={submitHandler}
        >
          <div className="popup-new-worklog__slider">
            <Slider
              startTime={props.startTime}
              endTime={props.endTime}
              update={update}
            />
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
              defaultValue={nameWorklog}
              onChange={hangleChangeWorklog}
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
              defaultValue={nameIssue}
              onChange={hangleChangeIssue}
            />
          </p>
          <div className="popup-new-worklog__btn-wrapper">
            <button className="popup-new-worklog__submit">
              <span className="visually-hidden">Span</span>
            </button>
            <button
              type="button"
              className="popup-new-worklog__close"
              onClick={props.openPopup}
            >
              <span className="visually-hidden">Close</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isOpen: state.popup, isStartTimer: state.timer };
};

const mapDispachToProps = {
  openPopup,
  startTimer,
};

export default connect(mapStateToProps, mapDispachToProps)(PopupNewWorklog);
