import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { auditManagerApiSlice } from "@convin/redux/services/settings/auditManager.service";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(auditManagerApiSlice.middleware),
});
