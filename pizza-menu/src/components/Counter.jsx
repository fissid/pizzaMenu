import React, { useState } from "react";
export default function Counter() {
  const [myDate, setMyDate] = useState(new Date());
  console.log(myDate);
  return (
    <>
      <div className="step"></div>
      <div className="count"></div>
      <p>Today is {}</p>
    </>
  );
}
