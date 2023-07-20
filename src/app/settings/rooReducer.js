import { combineReducers } from "redux";
import { productListingApiSlice } from "./services/productListing.service";
import { authApiSlice } from "./services/auth.service";
import whislistReducer from "./services/whislist/whislist.slice";
import authLoginReducer from "./services/auth/auth.slice";

// Combine all reducers.
const appReducer = combineReducers({
  whislist: whislistReducer,
  toogle: authLoginReducer,
  [productListingApiSlice.reducerPath]: productListingApiSlice.reducer,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
