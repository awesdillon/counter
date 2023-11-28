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
  const handleStepMinus = () => setStep((s) => s - 1);
  const handleStepPlus = () => setStep((s) => s + 1);
  return (
    <>
      <div>
        <div className="step">
          <button className="stepMinus" onClick={handleStepMinus}>
            -
          </button>
          <span>Step: {step}</span>
          <button className="stepPlus" onClick={handleStepPlus}>
            +
          </button>
        </div>

        <div className="count">
          <button className="minus" onClick={handleMinus}>
            -
          </button>
          <span>Count: {count}</span>
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
      </div>
    </>
  );
}
