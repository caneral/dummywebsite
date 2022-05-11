import { combineReducers } from "redux";

import auth from "./auth";
import localization from "./localization"

const rootReducer = combineReducers({
  auth,
  localization
});

export default rootReducer;
