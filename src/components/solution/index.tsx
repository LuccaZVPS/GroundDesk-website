import { Heading } from "../shared/heading";
import { Box } from "./components/box";
import { data } from "./data";
import "./styles.scss";
export const Solution = () => {
  return (
    <section className="solution">
      <Heading txt="Our Solution For Your Business" />
      <p>
        We make it easy for users to use our platform, that's why we provide
        this benefit.
      </p>

      <div className="solution-box-container">
        {data.map((info) => (
          <Box img={info.img} title={info.title} txt={info.txt} />
        ))}
      </div>
    </section>
  );
};
