import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { phoneReducer } from "../reducer/phone.reducer";

import { usePhone } from "./use.phone";

describe("Given the usePhone hook", () => {
  let element: HTMLElement[];

  const mockStore = configureStore({
    reducer: { phone: phoneReducer },
  });

  beforeEach(() => {
    function TestComp() {
      const { phone, deleteNumber, inputNumber, phoneCall } = usePhone();

      return (
        <>
          <button
            onClick={() => {
              inputNumber("3");
            }}
          >
            The number called is: {phone.number} and nothing else
          </button>
          <button
            onClick={() => {
              deleteNumber();
            }}
          ></button>
          <button
            onClick={() => {
              phoneCall();
            }}
          >
            {phone.isCalling ? "true" : "false"}
          </button>
        </>
      );
    }

    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <>
        <Provider store={mockStore}>
          <TestComp></TestComp>
        </Provider>
      </>
    );

    element = screen.getAllByRole("button");
  });

  describe("When calling the inputNumber method", () => {
    test("Then it should add the number to the phone.number", () => {
      fireEvent.click(element[0]);
      const number = screen.getByText(
        /The number called is: 3 and nothing else/i
      );
      expect(number).toBeInTheDocument();
    });
  });

  describe("When calling the delete method", () => {
    test("Then it should toggle the isCalling value", () => {
      fireEvent.click(element[0]);
      fireEvent.click(element[1]);
      const number = screen.getByText(
        /The number called is: and nothing else/i
      );
      expect(number).toBeInTheDocument();
    });
  });

  describe("When calling the call method", () => {
    test("Then it should toggle the isCalling value", () => {
      const number = screen.getByText(/false/i);
      fireEvent.click(element[2]);
      expect(number).toBeInTheDocument();

      const number2 = screen.getByText(/true/i);
      expect(number2).toBeInTheDocument();
    });
  });
});
