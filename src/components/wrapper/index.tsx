import { Customer } from "../customer";
import { Hero } from "../hero";
import { Solution } from "../solution";
import "./styles.scss";
export const Wrapper = () => {
  return (
    <main>
      <Hero />
      <Solution />
      <Customer />
    </main>
  );
};
