import { createSlice } from "@reduxjs/toolkit";
import { ISubscriptionProduct } from "../../models/products";
import SubscriptionProductAsync from "./async";
import { ISubscriptionProductsState } from "./types";

const initialState: ISubscriptionProductsState = {
  subscriptions: [],
};
export const subscriptionsSlice = createSlice({
  initialState,
  name: "subscriptions",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SubscriptionProductAsync.Get.fulfilled, (state, action) => {
      state.subscriptions = action.payload;
    });
  },
});
export default subscriptionsSlice.reducer;
