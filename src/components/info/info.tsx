import { usePhone } from "../../hook/use.phone";

export function Info() {
  const { phone } = usePhone();
  return (
    <span className="message">{phone.isCalling ? "Llamando..." : ""}</span>
  );
}
