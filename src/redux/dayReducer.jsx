import { CREATE_DAY } from "./types";

const initialState = {};

export const dayReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DAY:
      debugger;
      return state.hasOwnProperty(action.key)
        ? { ...state }
        : { ...state, [action.key]: "" };
    default:
      return state;
  }
};
