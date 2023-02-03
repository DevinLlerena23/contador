import "./App.css";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
  const [valor, setValor] = useState(0);

  const incrementa = () => {
    setValor(valor + 1);
  };
  const clear = () => {
    setValor(0);
  };
  const decrementa = () => {
    setValor(valor - 1);
  };
  return (
    <div className="App">
    <Contador valor={valor} />
    <div className="botones container">
      <button className="Incre all" onClick={incrementa}>
        +
      </button>
      <button className="anch Limpia" onClick={clear}>
        Clear
      </button>
      <button className="Decre all" onClick={decrementa}>
        -
      </button>
    </div>
  </div>
  );
}

export default App;
