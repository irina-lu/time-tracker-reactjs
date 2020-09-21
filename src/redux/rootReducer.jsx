import { combineReducers } from "redux";
import { dayReducer } from "./dayReducer";
import { notificationReducer } from "./notificationReducer";
import { openPopupReducer } from "./openPopupReducer";
import { startTimerReducer } from "./startTimerReducer";
import { worklogReducer } from "./worklogReducer";

export const rootReducer = combineReducers({
  popup: openPopupReducer,
  timer: startTimerReducer,
  worklogs: worklogReducer,
  changeName: worklogReducer,
  changeIssue: worklogReducer,
  notification: notificationReducer,
  day: dayReducer,
});
