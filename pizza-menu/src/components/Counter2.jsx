import React, { useState } from "react";
export default function Counter2() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const today = new Date();
  today.setDate(today.getDate() + count * step);
  return (
    <div className="counter">
      <div className="step">
        <input type="range" min="0" max="10" value={step} onChange={(e) => setStep(Number(e.target.value))}></input>
        <p>{step}</p>
      </div>
      <div className="step">
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
      <p>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
        <span>{today.toDateString()}</span>
      </p>
    </div>
  );
}
