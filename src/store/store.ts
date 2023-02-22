import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { phoneReducer } from "../reducer/phone.reducer";

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
  preloadedState: {
    phone: {
      number: "1234",
      isCalling: false,
    },
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
