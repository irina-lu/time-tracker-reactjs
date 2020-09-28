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
  switch (action.type) {
    case CREATE_DAY:
      return state.hasOwnProperty(action.key)
        ? { ...state }
        : { [action.key]: [], ...state };
    case UPDATE_OF_DAY:
      return { ...action.payload, ...state };
    case CHANGE_ISSUE:
      return {
        ...state,
        [action.day]: state[action.day].map((worklog, id) => {
          return id !== action.payload.id
            ? worklog
            : {
                ...worklog,
                issue: action.payload.issue,
                status: action.payload.status,
              };
        }),
      };

    case CHANGE_NAME:
      return {
        ...state,
        [action.day]: state[action.day].map((worklog, id) => {
          return id !== action.payload.id
            ? worklog
            : {
                ...worklog,
                name: action.payload.name,
                status: action.payload.status,
              };
        }),
      };

    case DELETE_WORKLOG:
      return {
        ...state,
        [action.day]: [
          ...state[action.day].slice(0, action.payload),
          ...state[action.day].slice(action.payload + 1),
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
