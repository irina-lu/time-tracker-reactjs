import { OPEN_NOTIFICATION } from "./types.jsx";

const initialState = {};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_NOTIFICATION:
      return (state = action.payload);
    default:
      return state;
  }
};
