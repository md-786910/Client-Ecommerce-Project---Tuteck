import { createSlice } from "@reduxjs/toolkit";
import { showSuccess, showWarn } from "../../../../utils/errorHandling";

const initialState = {
  show: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleOpen: (state) => {
      return {
        ...state,
        show: true,
      };
    },
    handleClose: (state) => {
      return {
        ...state,
        show: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleClose, handleOpen } = authSlice.actions;

export default authSlice.reducer;
