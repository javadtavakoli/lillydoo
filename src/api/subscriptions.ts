import subscriptionResponse from "../mock/response.json";
import {
  ISubscriptionInfoResponse,
  ISubscriptionProduct,
} from "../models/products";
const subscriptions: ISubscriptionProduct[] = (
  subscriptionResponse as ISubscriptionInfoResponse
).subscriptionProducts;
const Get = (): ISubscriptionProduct[] => {
  return subscriptions;
};
const SubscriptionAPIs = { Get };
export default SubscriptionAPIs;
