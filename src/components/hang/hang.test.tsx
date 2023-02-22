import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { phoneReducer } from "../../reducer/phone.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Hang } from "./hang";

const mockStore = configureStore({
  reducer: {
    phone: phoneReducer,
  },
  preloadedState: {
    phone: {
      number: "123456789",
      isCalling: false,
    },
  },
});

describe("Given the call component", () => {
  render(
    <Provider store={mockStore}>
      <Hang />
    </Provider>
  );
  describe("When the When clicked on the button renderized", () => {
    test("Then it should toggle the class from active to off", () => {
      const element = screen.getByRole("button");
      let result = mockStore.getState().phone.isCalling;
      expect(result).toBe(false);
      fireEvent.click(element);
      result = mockStore.getState().phone.isCalling;
      expect(result).toBe(true);
    });
  });
});
