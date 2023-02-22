import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Call } from "./call";
import { phoneReducer } from "../../reducer/phone.reducer";
import { configureStore } from "@reduxjs/toolkit";

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
      <Call />
    </Provider>
  );
  describe("When the When clicked on the button renderized", () => {
    test("Then it should toggle the class from active to off", () => {
      const element = screen.getByRole("button");
      expect(element).toHaveClass("active");
      fireEvent.click(element);
      expect(element).not.toHaveClass("active");
    });
  });
});
test("renders learn react link", () => {});
