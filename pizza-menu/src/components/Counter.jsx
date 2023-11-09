import React, { useState } from "react";
export default function Counter() {
  const [myDate, setMyDate] = useState(new Date());
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  function stepVolume(flag) {
    if (!flag && step > 0) {
      setStep((prev) => (prev -= 1));
    } else {
      setStep((prev = d > (prev += 1)));
    }
  }
  return (
    <div className="counter">
      <div className="step">
        <button onClick={() => stepVolume(false)}>-</button>
        <p>
          Step: <span>{step}</span>
        </p>
        <button onClick={() => stepVolume(true)}>+</button>
      </div>
      <div className="step count">
        <button>-</button>
        <p>
          Count: <span>{count}</span>
        </p>
        <button>+</button>
      </div>
      <p>Today is {new Intl.DateTimeFormat(navigator.language, { weekday: "short", month: "short", day: "2-digit", year: "numeric" }).format(myDate)}</p>
    </div>
  );
}
