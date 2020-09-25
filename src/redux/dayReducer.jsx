import {
  CREATE_DAY,
  UPDATE_OF_DAY,
  CHANGE_ISSUE,
  CHANGE_NAME,
  DELETE_WORKLOG,
  SET_ALL_STATUSES,
} from "./types";

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
      debugger;
      const neededIssue = getDayAndIndex(action);

      let newWorklog = {
        ...state[neededIssue.day][neededIssue.index],
        issue: action.payload.issue,
        status: action.payload.status,
      };

      return {
        ...state,
        [neededIssue.day]: [
          ...state[neededIssue.day].slice(0, neededIssue.index),
          newWorklog,
          ...state[neededIssue.day].slice(neededIssue.index + 1),
        ],
      };
    case CHANGE_NAME:
      const neededName = getDayAndIndex(action);

      let newName = {
        ...state[neededName.day][neededName.index],
        name: action.payload.name,
        status: action.payload.status,
      };

      return {
        ...state,
        [neededName.day]: [
          ...state[neededName.day].slice(0, neededName.index),
          newName,
          ...state[neededName.day].slice(neededName.index + 1),
        ],
      };

    case DELETE_WORKLOG:
      let day = Object.keys(state).find((day) => day === action.day);
      return {
        ...state,
        [day]: [
          ...state[day].slice(0, action.payload),
          ...state[day].slice(action.payload + 1),
        ],
      };

    case SET_ALL_STATUSES:
      return {
        ...state,
        [action.day]: state[action.day].map((worklog, id) => {
          return {
            ...worklog,
            status: action.statuses[id],
          };
        }),
      };

    default:
      return state;
  }
};
