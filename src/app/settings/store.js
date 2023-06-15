import { configureStore } from "@reduxjs/toolkit";

import { productListingApiSlice } from "./services/productListing.service";
import { rootReducer } from "./rooReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(productListingApiSlice.middleware),
});
