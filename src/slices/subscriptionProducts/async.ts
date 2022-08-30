import { createAsyncThunk } from "@reduxjs/toolkit";
import SubscriptionAPIs from "../../api/subscriptions";
import { ISubscriptionProduct } from "../../models/products";

const Get = createAsyncThunk<ISubscriptionProduct[], void>(
  "products/getAll",
  async (_) => {
    return SubscriptionAPIs.Get();
  }
);
const SubscriptionProductAsync = { Get };
export default SubscriptionProductAsync;
