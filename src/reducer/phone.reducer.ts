import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const phoneReducer = createReducer(initialState, (builder) => {
  builder.addDefaultCase((state) => state);
});
