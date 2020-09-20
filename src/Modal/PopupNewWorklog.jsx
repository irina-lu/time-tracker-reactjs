import React, { useState } from "react";
import "./PopupNewWorklog.scss";
import Slider from "./Slider/Slider";
import { connect } from "react-redux";
import { openPopup } from "../redux/actions";
import { startTimer } from "../redux/actions";
import { createWorklog } from "../redux/actions";
import { openNotification } from "../redux/actions";

function PopupNewWorklog(props) {
  const [nameWorklog, setNameWorklog] = useState(props.nameWorklog);
  const [nameIssue, setNameIssue] = useState(props.nameIssue);
  const [nameError, setNameError] = useState("");

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  function update(start, end) {
    setStart(start);
    setEnd(end);
  }

  function submitHandler(e) {
    e.preventDefault();
    const isValid = validate();
    if (start === end) {
      const warningStatus = {
        status: "warning",
        message: "You can't track less than minute.",
      };
      props.openNotification(warningStatus);
      props.handleClick();
    } else if (!isValid) {
      const status = {
        status: "warning",
        message: "Please, enter the worklog name.",
      };
      props.openNotification(status);
      props.handleClick();
    } else {
      setNameError("");
      createNewWorklog();
      props.handleClose();
      props.openNotification({});
      props.startTimer();
      props.openPopup();
    }
  }

  function validate() {
    let nameError = "";

    if (!nameWorklog) {
      nameError = "Please, enter worklog name";
    } else {
      nameError = "";
      setNameError(nameError);
    }

    if (nameError) {
      setNameError(nameError);
      return false;
    }

    return true;
  }

  function createNewWorklog() {
    const newWorklog = {
      name: nameWorklog,
      issue: nameIssue,
      started: start,
      ended: end,
      status: "",
    };
    props.createWorklog(newWorklog);
  }

  function hangleChangeWorklog(e) {
    setNameWorklog(e.target.value);
    validate();
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
              Worklog name *
            </label>
            <input
              className="popup-new-worklog__input"
              id="worklog"
              name="worklog"
              placeholder="Enter the worklog name"
              defaultValue={nameWorklog}
              onChange={hangleChangeWorklog}
            />
            <span className="form-error">{nameError}</span>
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
  return {
    isOpen: state.popup,
    isStartTimer: state.timer,
    worklogs: state.worklogs,
    statusNotification: state.notification,
  };
};

const mapDispachToProps = {
  openPopup,
  startTimer,
  createWorklog,
  openNotification,
};

export default connect(mapStateToProps, mapDispachToProps)(PopupNewWorklog);
