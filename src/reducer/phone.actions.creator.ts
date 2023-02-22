import { createAction } from "@reduxjs/toolkit";
import { phoneActions } from "./phone.actions";

export const callCreator = createAction<boolean>(phoneActions.call);

export const hangCreator = createAction<boolean>(phoneActions.hang);

export const inputCreator = createAction<string>(phoneActions.inputNumber);
