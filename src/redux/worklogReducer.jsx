import { CREATE_WORKLOG } from "./types";

const initialState = [
  {
    name: "Team standup",
    issue: "JRM-310",
    started: 540,
    ended: 600,
    status: "",
  },
];

export const worklogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WORKLOG:
      return [...state, action.payload];
    default:
      return state;
  }
};
