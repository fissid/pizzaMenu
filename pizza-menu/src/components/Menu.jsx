import Pizza from "./Pizza";
import data from "../data.js";
export default function Menu() {
  const numPizzas = data.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In veritatis animi hic temporibus itaque? Esse ipsam, deserunt, molestiae, libero modi minus aut recusandae omnis facilis neque dolorem sequi praesentium quo.</p>
          <ul className="pizzas">
            {data.map((each) => {
              return <Pizza pizzaInfo={each} />;
              //   if (each.soldOut) {
              //     return;
              //   } else {
              //     return <Pizza pizzaInfo={each} />;
              //   }
            })}
          </ul>
        </>
      )}
    </main>
  );
}
