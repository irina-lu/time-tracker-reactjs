import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import "./ActiveWorklog.scss";

function ActiveWorklog(props) {
  const [sec, setSec] = useState(0);
  const [classButton, setClassButton] = useState(
    "active-worklog__btn-pause_run"
  );
  const [isPaused, setPaused] = useState(false);
  const [isStopped, setStopped] = useState(true);
  let startTime = useRef("");
  const [nameWorklog, setNameWorklog] = useState("");
  const [nameIssue, setNameIssue] = useState("");
  const today = new Date();

  useEffect(() => {
    startTime.current = `${today.getHours()}:${today.getMinutes()}`;
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
    debugger;
    const endTime = calcEndTime();
    // console.log(endTime);
    props.openPopup(isStopped);
    props.updateInfoWorklog(nameWorklog, nameIssue);
    props.getTime(startTime.current, endTime.padStart(2, "0"));
  }

  function calcEndTime() {
    let arrTime = startTime.current.split(":");
    let [hour, min] = arrTime;
    hour = +hour + +displayHour;
    min = +min + +displayMin;
    if (min >= 60) {
      hour += Math.floor(min / 60)
        .toString()
        .padStart(2, "0");
      min %= 60;
    }
    return `${hour}:${min}`;
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

export default ActiveWorklog;
