import { SyntheticEvent } from "react";
import { usePhone } from "../../hook/use.phone";
import { Display } from "../display/display";

export function Call() {
  const { phone, phoneCall } = usePhone();

  const handleClick = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLElement;
    element.classList.replace("active", "off");
    setTimeout(phoneCall, 2500);
    phoneCall();
  };
  return (
    <>
      <Display></Display>
      <button
        className={phone.number.length === 9 ? "call active" : "call"}
        onClick={handleClick}
      >
        Call
      </button>
    </>
  );
}
