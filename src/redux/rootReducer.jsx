import { combineReducers } from "redux";
import { notificationReducer } from "./notificationReducer";
import { openPopupReducer } from "./openPopupReducer";
import { startTimerReducer } from "./startTimerReducer";
import { worklogReducer } from "./worklogReducer";

export const rootReducer = combineReducers({
  popup: openPopupReducer,
  timer: startTimerReducer,
  worklogs: worklogReducer,
  notification: notificationReducer,
});