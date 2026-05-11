import Landing from "./landing";
import Product from "./product";
import Benefits from "./benefits";
import About from "./about";
import Globe from "./get-started";

export default function Page() {
  return (
    <div>
      <Landing></Landing>

      <Product />

      <Benefits />

      <About />

      <Globe />
    </div>
  );
}
