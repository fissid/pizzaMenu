import "./index.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./components/Menu.jsx";
import Steps from "./components/Steps.jsx";
import Counter from "./components/Counter.jsx";
export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Steps />
      <Counter />
    </div>
  );
}
