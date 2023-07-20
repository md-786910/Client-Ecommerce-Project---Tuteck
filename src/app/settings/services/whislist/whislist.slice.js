import { createSlice } from "@reduxjs/toolkit";
import { showSuccess, showWarn } from "../../../../utils/errorHandling";

const initialState = {
  product: JSON.parse(localStorage.getItem("whislist")) || [],
};

export const whislistSlice = createSlice({
  name: "whislist",
  initialState,
  reducers: {
    setLocalStorage: (state, action) => {
      state.product.push(action.payload);
      if (JSON.parse(localStorage.getItem("whislist")) === null) {
        localStorage.setItem("whislist", JSON.stringify(state.product));
        showSuccess("Product added to whislist");
      } else {
        state.product = JSON.parse(localStorage.getItem("whislist"));
        const newProd = state.product.findIndex(
          (item) => item.productId === action.payload.productId
        );
        if (newProd === -1) {
          state.product.push(action.payload);
          localStorage.setItem("whislist", JSON.stringify(state.product));
          showSuccess("Product added to whislist");
        } else {
          showWarn("Product already added to whislist");
        }
      }
    },
    removeLocalStorage: (state, action) => {
      state.product = state.product?.filter(
        (prod) => prod.productId !== action.payload
      );
      localStorage.setItem("whislist", JSON.stringify(state.product));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLocalStorage, removeLocalStorage } = whislistSlice.actions;

export default whislistSlice.reducer;
