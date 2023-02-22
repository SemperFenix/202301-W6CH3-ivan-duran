import { Actions } from "../actions/action";
import { Info } from "../info/info";
import { Keyboard } from "../keyboard/keyboard";

function App() {
  return (
    <div className="container">
      <Info></Info>
      <Keyboard>
        <Actions></Actions>
      </Keyboard>
    </div>
  );
}

export default App;
