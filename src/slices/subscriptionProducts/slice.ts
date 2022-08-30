import { createSlice } from "@reduxjs/toolkit";
import { ISubscriptionProduct } from "../../models/products";
import SubscriptionProductAsync from "./async";

const initialState: ISubscriptionProduct[] = [];
export const subscriptionsSlice = createSlice({
  initialState,
  name: "subscriptions",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SubscriptionProductAsync.Get.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});
export default subscriptionsSlice.reducer;
