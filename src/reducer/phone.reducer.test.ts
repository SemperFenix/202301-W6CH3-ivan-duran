import * as ac from "./phone.actions.creator";
import { phoneReducer } from "./phone.reducer";

describe("Given the phoneReducer", () => {
  const mockInput = {
    type: ac.inputCreator,
    payload: "1",
  };
  const mockCall = {
    type: ac.callCreator,
  };

  const mockDelete = {
    type: ac.deleteCreator,
  };

  const mockState = {
    number: "23",
    isCalling: false,
  };

  describe("When action is call", () => {
    test("Then it should return the state with the number deleted and isCalling property to opposite", () => {
      const result = phoneReducer(mockState, mockCall);
      expect(result).toEqual({ ...mockState, number: "", isCalling: true });
    });
  });

  describe("When action is delete", () => {
    test("Then it should return the state with the number deleted", () => {
      const result = phoneReducer(mockState, mockDelete);
      expect(result).toEqual({ ...mockState, number: "" });
    });
  });
  describe("When action is inputNumber", () => {
    test("Then it should return the state with the number added", () => {
      const result = phoneReducer(mockState, mockInput);
      expect(result).toEqual({ ...mockState, number: "231" });
    });
  });
});
