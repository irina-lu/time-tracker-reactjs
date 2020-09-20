import {
  CREATE_WORKLOG,
  OPEN_NOTIFICATION,
  OPEN_POPUP,
  START_TIMER,
} from "./types";

export function openPopup() {
  return {
    type: OPEN_POPUP,
  };
}

export function startTimer() {
  return {
    type: START_TIMER,
  };
}

export function createWorklog(worklog) {
  return {
    type: CREATE_WORKLOG,
    payload: worklog,
  };
}

export function openNotification(status) {
  return {
    type: OPEN_NOTIFICATION,
    payload: status,
  };
}
