import React, { useState, useEffect, useRef } from "react";
import "./ActiveWorklog.scss";
import { connect } from "react-redux";
import { openPopup } from "../redux/actions";

function ActiveWorklog(props) {
  const [sec, setSec] = useState(0);
  const [classButton, setClassButton] = useState(
    "active-worklog__btn-pause_run"
  );
  const [isPaused, setPaused] = useState(false);
  let startTime = useRef("");
  const [nameWorklog, setNameWorklog] = useState("");
  const [nameIssue, setNameIssue] = useState("");

  useEffect(() => {
    const today = new Date();
    startTime.current = `${today
      .getHours()
      .toString()
      .padStart(2, "0")}:${today.getMinutes()}`;
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const fourHours = 14400;
      if (sec === fourHours) {
        stopTimer();
        return;
      }
      const interval = setInterval(() => {
        setSec((sec) => sec + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPaused, sec]);

  const min = sec / 60;
  const displaySec = (sec % 60).toString().padStart(2, "0");
  const displayMin = Math.floor(min % 60)
    .toString()
    .padStart(2, "0");
  const displayHour = Math.floor(min / 60);

  function pauseTimer() {
    if (classButton) {
      setClassButton("");
      setPaused(true);
    } else {
      setClassButton("active-worklog__btn-pause_run");
      setPaused(false);
    }
  }

  function stopTimer() {
    setPaused(true);
    setClassButton("");
    const endTime = calcEndTime();
    props.openPopup();
    props.updateInfoWorklog(nameWorklog, nameIssue);
    props.getTime(startTime.current, endTime);
  }

  function calcEndTime() {
    let arrTime = startTime.current.split(":");
    let [hour, min] = arrTime;
    hour = +hour + +displayHour;
    min = +min + +displayMin;
    if (min >= 60) {
      hour += Math.floor(min / 60);
      min %= 60;
    }
    return `${hour.toString().padStart(2, "0")}:${min}`;
  }

  function hangleChangeWorklog(e) {
    setNameWorklog(e.target.value);
  }

  function hangleChangeIssue(e) {
    setNameIssue(e.target.value);
  }

  return (
    <div className="active-worklog">
      <p className="active-worklog__input-wrapper">
        <label
          className="active-worklog__label visually-hidden"
          htmlFor="worklog-name"
        >
          Add worklog name
        </label>
        <input
          type="text"
          className="active-worklog__input"
          id="worklog-name"
          name="worklog-name"
          placeholder="Add worklog name"
          defaultValue={nameWorklog}
          onChange={hangleChangeWorklog}
        />
      </p>
      <p className="active-worklog__input-wrapper">
        <label
          className="active-worklog__label visually-hidden "
          htmlFor="issue-name"
        >
          Add issue
        </label>
        <input
          type="text"
          className="active-worklog__input"
          id="issue-name"
          name="issue-name"
          placeholder="Add issue"
          defaultValue={nameIssue}
          onChange={hangleChangeIssue}
        />
      </p>
      <span className="active-worklog__timer">{`0${displayHour}:${displayMin}:${displaySec}`}</span>
      <div className="active-worklog__btn-wrapper">
        <button
          className="active-worklog__btn active-worklog__btn-stop"
          onClick={stopTimer}
        >
          <span className="visually-hidden">Stop</span>
        </button>
        <button
          className={`active-worklog__btn active-worklog__btn-pause ${classButton}`}
          onClick={pauseTimer}
        >
          <span className="visually-hidden">Pause</span>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isStopped: state.popup };
};

const mapDispachToProps = {
  openPopup,
};

export default connect(mapStateToProps, mapDispachToProps)(ActiveWorklog);
