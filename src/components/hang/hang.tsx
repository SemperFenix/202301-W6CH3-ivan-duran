import { usePhone } from "../../hook/use.phone";

export function Hang() {
  const { phone, phoneCall } = usePhone();

  return (
    <button
      className={phone.isCalling ? "hang" : "hang off"}
      onClick={phoneCall}
    >
      Hang
    </button>
  );
}
