import {
  CREATE_WORKLOG,
  OPEN_POPUP,
  START_TIMER,
  VALIDATE_FIELD,
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
