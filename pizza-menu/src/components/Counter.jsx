import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const today = new Date();
  today.setDate(today.getDate() + count * step);
  return (
    <div className="counter">
      <div className="step">
        <button onClick={() => setStep((prev) => prev - 1)}>-</button>
        <p>
          Step: <span>{step}</span>
        </p>
        <button onClick={() => setStep((prev) => prev + 1)}>+</button>
      </div>
      <div className="step">
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <p>
          Count: <span>{count * step}</span>
        </p>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
      <p>
        <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
        <span>{today.toDateString()}</span>
      </p>
    </div>
  );
}
