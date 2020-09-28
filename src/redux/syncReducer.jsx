import { ENABLE_SYNC } from "./types";

const initialState = false;

export const syncReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_SYNC:
      return (state = !state);
    default:
      return state;
  }
};
