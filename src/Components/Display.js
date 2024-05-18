import React from "react";
import "./Displaystyle.css";
const Display = ({ text, result }) => {
  return (
    <div className="Display-screen">
      <div className="result">{result}</div>
      <div className="values-to-equate">{text}</div>
    </div>
  );
};

export default Display;
