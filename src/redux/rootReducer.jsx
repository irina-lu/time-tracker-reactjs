import { combineReducers } from "redux";
import { dayReducer } from "./dayReducer";
import { notificationReducer } from "./notificationReducer";
import { openPopupReducer } from "./openPopupReducer";
import { startTimerReducer } from "./startTimerReducer";
import { syncReducer } from "./syncReducer";

export const rootReducer = combineReducers({
  popup: openPopupReducer,
  timer: startTimerReducer,
  notification: notificationReducer,
  day: dayReducer,
  sync: syncReducer,
});
