import {
  CREATE_WORKLOG,
  OPEN_NOTIFICATION,
  OPEN_POPUP,
  START_TIMER,
  CHANGE_NAME,
  CHANGE_ISSUE,
  CREATE_DAY,
  UPDATE_OF_DAY,
  DELETE_WORKLOG,
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

export function changeName(name, day) {
  return {
    type: CHANGE_NAME,
    payload: name,
    day,
  };
}

export function changeIssue(issue, day) {
  return {
    type: CHANGE_ISSUE,
    payload: issue,
    day,
  };
}

export function openNotification(status) {
  return {
    type: OPEN_NOTIFICATION,
    payload: status,
  };
}

export function createDay(key) {
  return {
    type: CREATE_DAY,
    key,
  };
}

export function addWorklogInDay(day) {
  return {
    type: UPDATE_OF_DAY,
    payload: day,
  };
}

export function deleteWorklog(day, id) {
  return {
    type: DELETE_WORKLOG,
    day,
    payload: id,
  };
}
