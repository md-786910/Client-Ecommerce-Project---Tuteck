import { combineReducers } from "redux";
// import common from "./common/reducer";

//Typescript with rtk query
// import { auditManagerApiSlice } from "@convin/redux/services/settings/auditManager.service";

// Combine all reducers.
const appReducer = combineReducers({
  //   common,
  //   [auditManagerApiSlice.reducerPath]: auditManagerApiSlice.reducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
