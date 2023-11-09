export default function Order({ hours }) {
  return (
    <div className="order">
      <p>{`We are open until ${hours.close}:00. Come visit us or order online`}</p>
      <button className="btn">Order</button>
    </div>
  );
}
