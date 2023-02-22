import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import * as ac from "../reducer/phone.actions.creator";

export function usePhone() {
  const phone = useSelector((state: RootState) => state.phone);
  const dispatch = useDispatch<AppDispatch>();

  const inputNumber = (num: string) => {
    dispatch(ac.inputCreator(num));
  };

  const phoneCall = () => {
    dispatch(ac.callCreator());
  };

  const deleteNumber = () => {
    dispatch(ac.deleteCreator());
  };

  return {
    phone,
    phoneCall,
    inputNumber,
    deleteNumber,
  };
}
