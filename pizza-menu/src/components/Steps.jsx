import React, { useState } from "react";
const steps = [
  {
    num: 1,
    message: "Learn React",
    emoji: "🤞",
  },
  {
    num: 2,
    message: "Apply for jobs",
    emoji: "✌",
  },
  {
    num: 3,
    message: "Invest all your new income",
    emoji: "👌",
  },
];
export default function Steps() {
  const [selected, setSelected] = useState(0);
  const [displaying, setDisplaying] = useState(true);
  function clickHandler(e, goTo) {
    if (goTo) {
      setSelected((prev) => {
        if (prev >= steps.length - 1) return prev;
        return (prev += 1);
      });
    } else {
      setSelected((prev) => {
        if (prev <= 0) return prev;
        return (prev -= 1);
      });
    }
  }
  return (
    <div style={{ position: "relative" }}>
      <div className="close" onClick={() => setDisplaying((prev) => !prev)}>
        x
      </div>
      <div className="steps" style={displaying ? { display: "block" } : { display: "none" }}>
        <div className="numbers">
          {steps.map((step) => {
            return (
              <div className={step.num === selected + 1 ? "active" : ""} key={step.num}>
                {step.num}
              </div>
            );
          })}
        </div>
        <p className="message">
          Step {steps[selected].num}:{steps[selected].message} {steps[selected].emoji}
        </p>
        <div className="buttons">
          <button
            onClick={(e) => {
              clickHandler(e, false);
            }}
          >
            <span>Previus</span>
          </button>
          <button
            onClick={(e) => {
              clickHandler(e, true);
            }}
          >
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
