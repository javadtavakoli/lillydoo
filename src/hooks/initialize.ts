import { useEffect } from "react";
import SubscriptionProductAsync from "../slices/subscriptionProducts/async";
import { useAppDispatch } from "./reduxHooks";

const useInitialize = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    loadSubscriptions();
  }, [dispatch]);
  const loadSubscriptions = async () => {
    await dispatch(SubscriptionProductAsync.Get());
  };
};
export default useInitialize;
