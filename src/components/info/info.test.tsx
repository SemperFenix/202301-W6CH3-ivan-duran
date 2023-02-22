import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { phoneReducer } from "../../reducer/phone.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Info } from "./info";

const mockStore = configureStore({
  reducer: {
    phone: phoneReducer,
  },
  preloadedState: {
    phone: {
      number: "12345678",
      isCalling: true,
    },
  },
});

describe("Given the call component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={mockStore}>
        <Info />
      </Provider>
    );
  });
  describe("When the isCalling property is true", () => {
    test("Then it should render string 'Llamando...'", () => {
      const element = screen.getByText(/Llamando.../i);
      expect(element).toBeInTheDocument();
    });
  });
});
