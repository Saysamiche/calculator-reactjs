import React from "react";
import "./Calculatorstyle.css";

const Calculator = ({ symbol, color, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className="calculator-style"
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default Calculator;
