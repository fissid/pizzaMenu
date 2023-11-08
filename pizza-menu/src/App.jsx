import Pizza from "./components/Pizza";
import data from "./data.js";
import "./index.css";
export default function App() {
  console.log(data);
  return data.map((each) => {
    return <Pizza ing={each.ingredients} img={each.photoName} name={each.name}></Pizza>;
  });
}
