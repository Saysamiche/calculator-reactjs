import { useState } from "react";
import "./App.css";
import * as math from "mathjs";
import Calculator from "./Components/Calculator";
import Display from "./Components/Display";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (value) => {
    setText((text) => [...text, value + ""]);
  };

  const deleteValue = () => {
    setText(text.slice(0, -1));
  };

  const clearAll = () => {
    setText("");
    setResult("");
  };

  const calResult = () => {
    const display = text.join("");
    setResult(math.evaluate(display));
    // setResult(eval(display))
  };

  const specialColor = "#f2a33c";
  const specialColorClear = "grey";
  return (
    <div className="App">
      <div className="calculator-body">
        <div className="calculator-main">
          <Display text={text} result={result} />

          <div className="row-columns">
            <Calculator
              symbol="AC"
              color={specialColorClear}
              handleClick={clearAll}
            />
            <Calculator
              symbol="DE"
              color={specialColorClear}
              handleClick={deleteValue}
            />
            <Calculator
              symbol="%"
              color={specialColorClear}
              handleClick={addToText}
            />
            <Calculator
              symbol="+"
              color={specialColor}
              handleClick={addToText}
            />
          </div>

          <div className="row-columns">
            <Calculator symbol="1" handleClick={addToText} />
            <Calculator symbol="2" handleClick={addToText} />
            <Calculator symbol="3" handleClick={addToText} />
            <Calculator
              symbol="-"
              color={specialColor}
              handleClick={addToText}
            />
          </div>

          <div className="row-columns">
            <Calculator symbol="4" handleClick={addToText} />
            <Calculator symbol="5" handleClick={addToText} />
            <Calculator symbol="6" handleClick={addToText} />
            <Calculator
              symbol="/"
              color={specialColor}
              handleClick={addToText}
            />
          </div>

          <div className="row-columns">
            <Calculator symbol="7" handleClick={addToText} />
            <Calculator symbol="8" handleClick={addToText} />
            <Calculator symbol="9" handleClick={addToText} />
            <Calculator
              symbol="*"
              color={specialColor}
              handleClick={addToText}
            />
          </div>

          <div className="row-columns">
            <Calculator symbol="0" handleClick={addToText} />
            <Calculator symbol="00" handleClick={addToText} />
            <Calculator symbol="." handleClick={addToText} />
            <Calculator
              symbol="="
              color={specialColor}
              handleClick={calResult}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
