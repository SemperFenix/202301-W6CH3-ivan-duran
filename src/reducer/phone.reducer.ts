import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./phone.actions.creator";

type PhoneState = {
  number: string;
  isCalling: boolean;
};

const initialState: PhoneState = { number: "", isCalling: false };

export const phoneReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.inputCreator, (state, { payload }) => {
    const newNumber = state.number + payload;
    return { ...state, number: newNumber };
  });
  builder.addCase(ac.callCreator, (state, { payload }) => {
    const call = !state.isCalling;

    return { ...state, isCalling: call, number: "" };
  });

  builder.addCase(ac.deleteCreator, (state, { payload }) => ({
    ...state,
    number: "",
  }));
  builder.addDefaultCase((state) => state);
});
