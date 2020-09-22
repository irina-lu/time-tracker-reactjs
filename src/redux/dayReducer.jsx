import { CREATE_DAY, UPDATE_OF_DAY, CHANGE_ISSUE, CHANGE_NAME } from "./types";

const initialState = {
  "2020-09-21": [],
};

export const dayReducer = (state = initialState, action) => {
  function getDayAndIndex(action) {
    let day = Object.keys(state).find((day) => day === action.day);
    let index = state[day].findIndex(
      (item, index) => index === action.payload.id
    );
    return { day, index };
  }
  switch (action.type) {
    case CREATE_DAY:
      return state.hasOwnProperty(action.key)
        ? { ...state }
        : { [action.key]: [], ...state };
    case UPDATE_OF_DAY:
      return { ...action.payload, ...state };
    case CHANGE_ISSUE:
      const neenedIssue = getDayAndIndex(action);
      state[neenedIssue.day][neenedIssue.index].issue = action.payload.issue;
      return {
        ...state,
        // [neededDay]:
        //   ...state[neededDay],
        //   [neededIndex]: {
        //     ...state[neededDay][neededIndex],
        //     issue: action.payload.issue,
        //   },
      };
    case CHANGE_NAME:
      const neededName = getDayAndIndex(action);
      state[neededName.day][neededName.index].name = action.payload.name;
      return {
        ...state,
      };
    default:
      return state;
  }
};
