import React, { useState } from "react";
import "./PopupNewWorklog.scss";
import Slider from "./Slider/Slider";
import moment from "moment";
import { connect } from "react-redux";
import { openPopup } from "../redux/actions";
import { startTimer } from "../redux/actions";
import { createWorklog } from "../redux/actions";
import { openNotification } from "../redux/actions";
import { addWorklogInDay } from "../redux/actions";

function PopupNewWorklog(props) {
  const [nameWorklog, setNameWorklog] = useState(props.nameWorklog);
  const [nameIssue, setNameIssue] = useState(props.nameIssue);
  const [nameError, setNameError] = useState("");
  const today = moment().format("YYYY-MM-DD");
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
      showWarningStatus("You can't track less than minute.");
    } else if (!isValid) {
      showWarningStatus("Please, enter the worklog name.");
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

  function showWarningStatus(message) {
    const warningStatus = {
      status: "warning",
      message: message,
    };
    props.openNotification(warningStatus);
    props.handleClick();
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
    const day = addInDay(newWorklog, today);
    props.addWorklogInDay(day);
  }

  function addInDay(worklog, today) {
    const day = props.day;
    Object.keys(day).map((key) => {
      if (key === today) {
        day[key] = day[key].concat(worklog);
      }
    });
    return day;
  }

  function handleChangeWorklog(e) {
    setNameWorklog(e.target.value);
  }

  function handleChangeIssue(e) {
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
              onChange={handleChangeWorklog}
              autoComplete="off"
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
              onChange={handleChangeIssue}
              autoComplete="off"
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
    day: state.day,
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
  addWorklogInDay,
};

export default connect(mapStateToProps, mapDispachToProps)(PopupNewWorklog);
