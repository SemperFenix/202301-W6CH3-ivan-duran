import { SyntheticEvent } from "react";
import { usePhone } from "../../hook/use.phone";

export function Key() {
  const { phone, inputNumber, deleteNumber } = usePhone();

  const handleClick = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLInputElement;
    inputNumber(element.value);
  };

  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  return (
    <ol className="keyboard">
      {numbers.map((item) => {
        return (
          <li key={item}>
            <button
              className={"key"}
              value={item}
              onClick={handleClick}
              disabled={phone.number.length === 9 ? true : false}
            >
              {item}
            </button>
          </li>
        );
      })}

      <li key="delete">
        <button className="key big" onClick={deleteNumber}>
          delete
        </button>
      </li>
    </ol>
  );
}
