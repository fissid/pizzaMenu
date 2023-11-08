export default function Pizza({ img, name, ing, price }) {
  return (
    <div className="pizza">
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ing}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}
