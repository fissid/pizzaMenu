import React, { useState } from "react";
export default function Counter() {
  const [myDate, setMyDate] = useState(new Date());
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function steper(flag) {
    if (!flag && step > 1) {
      setStep((prev) => (prev -= 1));
    } else {
      setStep((prev) => (prev += 1));
    }
  }
  function counter(flag) {
    if (!flag) {
      setCount((prev) => {
        return (prev -= 1);
      });
      setMyDate((prev) => {
        return new Date(prev.setDate(prev.getDate() - step));
      });
    } else {
      setCount((prev) => (prev += 1));
      setMyDate((prev) => {
        return new Date(prev.setDate(prev.getDate() + step));
      });
    }
  }
  const forRenderDate = new Intl.DateTimeFormat(navigator.language, { weekday: "short", month: "short", day: "2-digit", year: "numeric" }).format(myDate);
  return (
    <div className="counter">
      <div className="step">
        <button onClick={() => steper(false)}>-</button>
        <p>
          Step: <span>{step}</span>
        </p>
        <button onClick={() => steper(true)}>+</button>
      </div>
      <div className="step count">
        <button onClick={() => counter(false)}>-</button>
        <p>
          Count: <span>{count}</span>
        </p>
        <button onClick={() => counter(true)}>+</button>
      </div>
      {new Date().toDateString() === myDate.toDateString() ? (
        <p>Today is {forRenderDate}</p>
      ) : (
        <p>
          {step * count} Days from today is {forRenderDate}
        </p>
      )}
    </div>
  );
}
