import { usePhone } from "../../hook/use.phone";

export function Display() {
  const { phone } = usePhone();
  return <span className="number">{phone.number}</span>;
}
