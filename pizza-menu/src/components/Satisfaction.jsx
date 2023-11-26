export default function Satisfaction({ val, get, children }) {
  function selectHandler(e) {
    get(e.target.value);
  }
  return (
    <div>
      <p style={{ display: "inline-block" }}>{children}</p>
      <select value={val} onChange={selectHandler}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
