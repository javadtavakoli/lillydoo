import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import subscriptionsReducer from "./slices/subscriptionProducts/slice";
import configurationsReducer from "./slices/configurations/slice";
export const store = configureStore({
  reducer: {
    subscriptions: subscriptionsReducer,
    configurations: configurationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
