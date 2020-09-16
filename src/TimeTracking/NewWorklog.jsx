import React from "react";
import "./NewWorklog.scss";
import { connect } from "react-redux";
import { startTimer } from "../redux/actions";

function NewWorklog(props) {
  return (
    <div className="new-worklog">
      <button className="new-worklog__btn" onClick={props.startTimer}>
        <span className="visually-hidden">Add new worklog</span>
      </button>
      <p className="new-worklog__phrase">NEW WORKLOG</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isStartTimer: state.timer,
  };
};

const mapDispatchToProps = {
  startTimer,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewWorklog);
