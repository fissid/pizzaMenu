import Pizza from "./Pizza";
import data from "../data.js";
export default function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      {data.map((each) => {
        return <Pizza key={each.name} ing={each.ingredients} img={each.photoName} name={each.name} />;
      })}
    </div>
  );
}
