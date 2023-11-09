import Pizza from "./Pizza";
import data from "../data.js";
export default function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {data.map((each) => {
          return <Pizza key={each.name} ing={each.ingredients} img={each.photoName} name={each.name} price={Number(each.price)} />;
        })}
      </ul>
    </main>
  );
}
