import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { phoneReducer } from "../../reducer/phone.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Key } from "./key";

const mockStore = configureStore({
  reducer: {
    phone: phoneReducer,
  },
  preloadedState: {
    phone: {
      number: "12345678",
      isCalling: false,
    },
  },
});

describe("Given the call component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={mockStore}>
        <Key />
      </Provider>
    );
  });
  describe("When the When clicked on the number buttons", () => {
    test("Then it should add the number to the state number property", () => {
      const element = screen.getAllByRole("button");
      fireEvent.click(element[0]);
      const result = mockStore.getState().phone.number;
      expect(result).toBe("123456787");
    });
  });

  describe("When the When clicked on the delete button", () => {
    test("Then it should delete the number in the state number property", () => {
      const element = screen.getAllByRole("button");
      fireEvent.click(element[10]);
      const result = mockStore.getState().phone.number;
      expect(result).toBe("");
    });
  });
});
