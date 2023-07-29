import { combineReducers } from "redux";
import { productListingApiSlice } from "./services/productListing.service";
import { authApiSlice } from "./services/auth.service";
import whislistReducer from "./services/whislist/whislist.slice";
import authLoginReducer from "./services/auth/auth.slice";
import { cartApiSlice } from "./services/cart.service";
import { orderApiSlice } from "./services/order.service";
import { addressApiSlice } from "./services/address.service";

// Combine all reducers.
const appReducer = combineReducers({
  whislist: whislistReducer,
  toogle: authLoginReducer,
  [productListingApiSlice.reducerPath]: productListingApiSlice.reducer,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [cartApiSlice.reducerPath]: cartApiSlice.reducer,
  [orderApiSlice.reducerPath]: orderApiSlice.reducer,
  [addressApiSlice.reducerPath]: addressApiSlice.reducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
