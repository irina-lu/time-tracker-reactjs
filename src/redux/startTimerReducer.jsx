import { START_TIMER } from "./types";

const initialState = false;

export const startTimerReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return (state = !state);
    default:
      return state;
  }
};
