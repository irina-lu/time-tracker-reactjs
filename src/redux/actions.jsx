import { OPEN_POPUP, START_TIMER } from "./types";

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
