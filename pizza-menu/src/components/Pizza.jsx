export default function Pizza({ img, name, ing }) {
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{ing}</p>
    </div>
  );
}
