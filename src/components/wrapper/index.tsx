import { Customer } from "../customer";
import { Hero } from "../hero";
import { Pricing } from "../pricing";
import { Solution } from "../solution";
import { Testimonials } from "../testimonials";
import "./styles.scss";
export const Wrapper = () => {
  return (
    <main>
      <Hero />
      <Solution />
      <Customer />
      <Pricing />
      <Testimonials />
    </main>
  );
};
