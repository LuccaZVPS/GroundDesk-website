import { Heading } from "../shared/heading";
import dashBoard from "../../assets/dashboard.png";
import face1 from "../../assets/Mask.png";
import face2 from "../../assets/Mask2.png";
import face3 from "../../assets/Mask3.png";
import face4 from "../../assets/Mask4.png";

import "./styles.scss";
import { Button } from "../shared/button";
export const Customer = () => {
  return (
    <section className="customer">
      <div className="customer-content">
        <Heading txt="Easy collaborative financial team" />
        <p>
          No need to worry about your files being lost because we are very loyal
          to be your storage platform.
        </p>
        <div className="people">
          <div className="people-img">
            <img src={face1} alt="" />
            <img src={face2} alt="" />
            <img src={face3} alt="" />
            <img src={face4} alt="" />
          </div>
          <p>More than 10.000 people have tried</p>
        </div>
        <Button txt="Try for free" color="#FFFFFF" background="#6A4BFF" />
      </div>
      <div className="customer-img">
        <img src={dashBoard} alt="" />
      </div>
    </section>
  );
};
