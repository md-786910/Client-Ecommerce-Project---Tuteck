import { configureStore } from "@reduxjs/toolkit";

import { productListingApiSlice } from "./services/productListing.service";
import { rootReducer } from "./rooReducer";
import { authApiSlice } from "./services/auth.service";
import { cartApiSlice } from "./services/cart.service";
import { orderApiSlice } from "./services/order.service";
import { addressApiSlice } from "./services/address.service";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(
      productListingApiSlice.middleware,
      authApiSlice.middleware,
      cartApiSlice.middleware,
      orderApiSlice.middleware,
      addressApiSlice.middleware
    ),
});
