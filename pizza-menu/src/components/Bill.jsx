export default function Bill({ bill, enteredBill }) {
  function inputHandler(e) {
    enteredBill(e.target.value);
  }
  return (
    <div>
      <p style={{ display: "inline-block" }}>How much was the bill? </p>
      <input type="text" placeholder="000" value={bill} onChange={inputHandler} />
    </div>
  );
}
