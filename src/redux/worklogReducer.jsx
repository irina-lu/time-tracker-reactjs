import { CREATE_WORKLOG, CHANGE_NAME, CHANGE_ISSUE } from "./types";

const initialState = [
  // {
  //   name: "Team standup",
  //   issue: "JRM-310",
  //   started: 540,
  //   ended: 600,
  //   status: "",
  // },
];

export const worklogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WORKLOG:
      return [...state, action.payload];
    // case CHANGE_NAME:
    //   return state.map((worklog, index) => {
    //     if (index === action.payload.id) {
    //       return {
    //         ...worklog,
    //         name: action.payload.name,
    //       };
    //     }
    //     return worklog;
    //   });
    // case CHANGE_ISSUE:
    //   return state.map((worklog, index) => {
    //     if (index === action.payload.id) {
    //       return {
    //         ...worklog,
    //         issue: action.payload.issue,
    //       };
    //     }
    //     return worklog;
    //   });
    default:
      return state;
  }
};
