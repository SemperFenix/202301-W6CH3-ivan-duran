import { createAction } from "@reduxjs/toolkit";
import { phoneActions } from "./phone.actions";

export const callCreator = createAction(phoneActions.call);

export const inputCreator = createAction<string>(phoneActions.inputNumber);

export const deleteCreator = createAction(phoneActions.deleteNumber);
