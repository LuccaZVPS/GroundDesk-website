import "./styles.scss";
import light from "../../../../assets/light.png";
import dark from "../../../../assets/dark.png";
import { Button } from "../../../shared/button";

export const Content = () => {
  return (
    <div className="hero-content">
      <h1>
        We Help to Get <span>Business</span> <br />
        Solution Ever
      </h1>
      <p>
        We provide many features that you can use cheaply and easily. Try it now{" "}
        <br />
        and get an interesting promo
      </p>
      <div className="hero-content-btns">
        <Button txt="Try for free" color="#6A4BFF" background="#FFFFFF" />
        <Button txt="Watch a demo" color="#FFFFFF" background="transparent" />
      </div>
      <div className="hero-content-img">
        <img src={light} alt="" />

        <img src={dark} alt="" />
      </div>
    </div>
  );
};
