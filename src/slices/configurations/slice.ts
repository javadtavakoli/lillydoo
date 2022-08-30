import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../models/products";
import { IConfigurationsState, ProductLines } from "./types";

const initialState: IConfigurationsState = {
  productIndex: 0,
  productLine: "Regular",
  productType: "diapers",
};
export const configurationsSlice = createSlice({
  initialState,
  name: "configurations",
  reducers: {
    changeType: (state, action: PayloadAction<ProductType>) => {
      state.productType = action.payload;
      state.productIndex = 0;
    },
    changeProduct: (state, action: PayloadAction<number>) => {
      state.productIndex = action.payload;
    },
    changeLine: (state, action: PayloadAction<ProductLines>) => {
      state.productLine = action.payload;
    },
  },
});
export const configurationActions = configurationsSlice.actions;
export default configurationsSlice.reducer;
