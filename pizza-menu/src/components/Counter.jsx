import React, { useState } from "react";
export default function Counter() {
  const [myDate, setMyDate] = useState(new Date());
  console.log(myDate);
  return (
    <div className="counter">
      <div className="step">
        <button>-</button>
        <p>
          Step: <span>1</span>
        </p>
        <button>+</button>
      </div>
      <div className="step count">
        <button>-</button>
        <p>
          Count: <span>1</span>
        </p>
        <button>+</button>
      </div>
      <p>Today is {}</p>
    </div>
  );
}
