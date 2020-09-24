import {
  CREATE_DAY,
  UPDATE_OF_DAY,
  CHANGE_ISSUE,
  CHANGE_NAME,
  DELETE_WORKLOG,
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
      let neededDay = Object.keys(state).find((day) => day === action.day);
      let index = state[neededDay].findIndex(
        (item, index) => index === action.payload.id
      );

      let newWorklog = {
        ...state[neededDay][index],
        issue: action.payload.issue,
      };

      return {
        ...state,
        [neededDay]: [
          ...state[neededDay].slice(0, index),
          newWorklog,
          ...state[neededDay].slice(index + 1),
        ],
      };
    case CHANGE_NAME:
      const neededName = getDayAndIndex(action);
      state[neededName.day][neededName.index].name = action.payload.name;
      return {
        ...state,
      };
    case DELETE_WORKLOG:
      debugger;
      let day = Object.keys(state).find((day) => day === action.day);
      return {
        ...state,
        [day]: [
          ...state[day].slice(0, action.payload),
          ...state[day].slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};
