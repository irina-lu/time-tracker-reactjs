import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import "./Notification.scss";
import { connect } from "react-redux";
import { openNotification } from "../redux/actions";

function Notification(props) {
  const WARNING = "#FFCC40";
  const DONE = "#62d2b1";
  const ERROR = "#e34040";

  let color;

  switch (props.statusNotification.status) {
    case "warning":
      color = { backgroundColor: WARNING };
      break;
    case "done":
      color = { backgroundColor: DONE };
      break;
    case "error":
      color = { backgroundColor: ERROR };
      break;
    default:
      color = { backgroundColor: "transparent" };
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      classes={{ root: "notification" }}
      open={props.open}
      autoHideDuration={5000}
      onClose={props.handleClose}
      action={
        <React.Fragment>
          <h2 className="visually-hidden">Notification message</h2>
          <div className="notification__status-wrapper">
            <span className="notification__status" style={color}></span>
            <button
              className="notification__btn-close"
              onClick={props.handleClose}
            ></button>
          </div>
          <p className="notification__message">
            {props.statusNotification.message}
          </p>
        </React.Fragment>
      }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    statusNotification: state.notification,
  };
};

const mapDispachToProps = {
  openNotification,
};

export default connect(mapStateToProps, mapDispachToProps)(Notification);
