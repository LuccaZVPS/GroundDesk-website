import { Content } from "./components/content";
import { Header } from "./components/header";
import "./styles.scss";
export const Hero = () => {
  return (
    <section>
      <div className="blue-empty"></div>
      <Header />
      <Content />
    </section>
  );
};
