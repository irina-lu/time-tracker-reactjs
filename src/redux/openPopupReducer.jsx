import { OPEN_POPUP } from "./types";

const initialState = false;

export const openPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_POPUP:
      return (state = !state);
    default:
      return state;
  }
};
