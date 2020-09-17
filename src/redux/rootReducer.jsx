import { combineReducers } from "redux";
import { openPopupReducer } from "./openPopupReducer";
import { startTimerReducer } from "./startTimerReducer";
import { worklogReducer } from "./worklogReducer";

export const rootReducer = combineReducers({
  popup: openPopupReducer,
  timer: startTimerReducer,
  worklogs: worklogReducer,
});
