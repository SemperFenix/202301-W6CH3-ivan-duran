import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./phone.actions.creator";

type PhoneState = {
  number: string;
  isCalling: boolean;
  isHang: boolean;
};

const initialState: PhoneState = { number: "", isCalling: false, isHang: true };

export const phoneReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.inputCreator, (state, { payload }) => {
    const newNumber = state.number + payload;
    return { ...state, number: newNumber };
  });
  builder.addCase(ac.callCreator, (state, { payload }) => ({
    ...state,
    isCalling: payload,
  }));
  builder.addCase(ac.hangCreator, (state, { payload }) => ({
    ...state,
    isHang: payload,
  }));
  builder.addDefaultCase((state) => state);
});
