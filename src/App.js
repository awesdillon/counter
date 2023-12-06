import "./App.css";
import { React, useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handlePlus = () => setCount((c) => c + step);
  const handleMinus = () => setCount((c) => c - step);
  const date = new Date();
  date.setDate(date.getDate() + count);
  const [step, setStep] = useState(1);
  function handleReset() {
    setCount(0);
    setStep(0);
  }
  return (
    <>
      <div>
        <div className="step">
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          ></input>
          <span>Step: {step}</span>
        </div>

        <div className="count">
          <button className="minus" onClick={handleMinus}>
            -
          </button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          ></input>
          <button className="plus" onClick={handlePlus}>
            +
          </button>
        </div>

        <div>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days until `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </div>
        <div>
          {count > 0 || step !== 1 ? (
            <button onClick={handleReset}>Reset</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
