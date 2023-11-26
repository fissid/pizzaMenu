export default function Result({ bill, myTip, hisTip }) {
  const tip = (myTip + hisTip) / 2;
  return (
    <div>
      <h3>
        You pay ${bill + tip} (${bill}+${tip})
      </h3>
    </div>
  );
}
