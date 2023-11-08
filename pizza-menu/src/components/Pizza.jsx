export default function Pizza({ img, name, ing }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{ing}</p>
      <img src={img} alt={name} />
    </div>
  );
}
