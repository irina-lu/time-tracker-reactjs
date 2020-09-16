import { CREATE_WORKLOG } from "./types";

const initialState = {
  worklog: [{ name: "", issue: "", started: "", stoped: "", status: "" }],
};

export const worklogReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case CRW:
  //       return (state = !state);
  //     default:
  //       return state;
  //   }
  return state;
};
