import React, { useState } from "react";
export default function Counter() {
  return (
    <div className="counter">
      <div className="step">
        <button>-</button>
        <p>
          Step: <span>0</span>
        </p>
        <button>-</button>
      </div>
      <div className="step">
        <button>-</button>
        <p>
          Count: <span>0</span>
        </p>
        <button>-</button>
      </div>
      <p>today</p>
    </div>
  );
}
