import { testimonial } from "../../data";
import star from "../../../../assets/Star.png";
import "./styles.scss";
export const Testimonial = ({ img, name, role, text, stars }: testimonial) => {
  return (
    <div className="testimonial">
      <div>
        <div className="user-info">
          <img src={img} alt="" />
          <div>
            <h3>{name}</h3>
            <h4>{role}</h4>
          </div>
        </div>
        <p>{text}</p>
      </div>
      <div className="stars">
        {[...Array(stars)].map((e, i) => (
          <img src={star} />
        ))}
      </div>
    </div>
  );
};
