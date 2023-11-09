import React, { useState } from "react";
export default function Counter() {
  const [myDate, setMyDate] = useState(new Date());
  const [stepCount, setStepCount] = useState(1);
  return (
    <div className="counter">
      <div className="step">
        <button>-</button>
        <p>
          Step: <span>{stepCount}</span>
        </p>
        <button>+</button>
      </div>
      <div className="step count">
        <button>-</button>
        <p>
          Count: <span>{stepCount}</span>
        </p>
        <button>+</button>
      </div>
      <p>Today is {new Intl.DateTimeFormat(navigator.language, { weekday: "short", month: "short", day: "2-digit", year: "numeric" }).format(myDate)}</p>
    </div>
  );
}
