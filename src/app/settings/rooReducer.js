import { combineReducers } from "redux";
import { productListingApiSlice } from "./services/productListing.service";
// import common from "./common/reducer";

//Typescript with rtk query

// Combine all reducers.
const appReducer = combineReducers({
  //   common,
  [productListingApiSlice.reducerPath]: productListingApiSlice.reducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
