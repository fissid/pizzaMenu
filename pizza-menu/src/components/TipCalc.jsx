import Bill from "./Bill";
import Satisfaction from "./Satisfaction";
import Result from "./Result";
import Reset from "./Reset";
import { useState } from "react";

export default function TipCalc() {
  const [bill, setBill] = useState(0);
  const [mySatisfaction, setMySatisfaction] = useState(0);
  const [myFriendSatisfaction, setMyFriendSatisfaction] = useState(0);
  function resetData() {
    setBill(0);
    setMySatisfaction(0);
    setMyFriendSatisfaction(0);
  }
  return (
    <div className="counter">
      <Bill bill={bill} enteredBill={setBill} />
      <Satisfaction val={mySatisfaction} get={setMySatisfaction}>
        How did you like the service?
      </Satisfaction>
      <Satisfaction val={myFriendSatisfaction} get={setMyFriendSatisfaction}>
        How did your friend like the service?
      </Satisfaction>
      {bill > 0 && (
        <>
          <Result bill={Number(bill)} myTip={Number(mySatisfaction)} hisTip={Number(myFriendSatisfaction)}></Result>
          <Reset action={resetData}></Reset>
        </>
      )}
    </div>
  );
}
