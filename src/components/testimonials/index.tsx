import { useState, useRef } from "react";
import { Heading } from "../shared/heading";
import { Testimonial } from "./components/testimonial";
import { data } from "./data";
import arrow from "../../assets/arrow.png";
import "./styles.scss";

export const Testimonials = () => {
  const slider = useRef(null as unknown as HTMLDivElement);
  const [count, setCount] = useState(1);
  const [totalScroll, setTotalScroll] = useState(0);
  const goRight = () => {
    if (totalScroll !== slider.current.scrollWidth && totalScroll) {
      return;
    }
    if (!totalScroll) {
      setTotalScroll(slider.current.scrollWidth);
    }
    slider.current.style.marginLeft = `-${(count + 1) * 350}px`;
    setCount(count + 1);
  };
  const goLeft = () => {
    if (count === 0) {
      setTotalScroll(0);
    }

    slider.current.style.marginLeft = `-${(count - 1) * 350}px`;
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <section className="testimonials">
      <div className="controls">
        <Heading txt="Ground Desk is loved by users" />
        <div className="control">
          <div onClick={goLeft}>
            <img src={arrow} alt="" />
          </div>
          <div>
            <img onClick={goRight} className="right" src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="testimonial-container" ref={slider}>
        <div className="slider">
          {data.map((testimonial) => (
            <Testimonial
              img={testimonial.img}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
              stars={testimonial.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
