import { combineReducers } from "redux";
import { productListingApiSlice } from "./services/productListing.service";
import { authApiSlice } from "./services/auth.service";
// import common from "./common/reducer";

// Combine all reducers.
const appReducer = combineReducers({
  //   common,
  [productListingApiSlice.reducerPath]: productListingApiSlice.reducer,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
