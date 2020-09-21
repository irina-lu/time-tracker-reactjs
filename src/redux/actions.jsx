import {
  CREATE_WORKLOG,
  OPEN_NOTIFICATION,
  OPEN_POPUP,
  START_TIMER,
  CHANGE_NAME,
  CHANGE_ISSUE,
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

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
}

export function changeIssue(issue) {
  return {
    type: CHANGE_ISSUE,
    payload: issue,
  };
}

export function openNotification(status) {
  return {
    type: OPEN_NOTIFICATION,
    payload: status,
  };
}
