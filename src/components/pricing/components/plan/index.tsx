import { Button } from "../../../shared/button";
import { benefit, plan } from "../../data";
import "./styles.scss";
import benefitImg from "../../../../assets/benefit.png";
import benefitImgLight from "../../../../assets/benefit-light.png";
import { useEffect, useState } from "react";
interface props {
  title: string;
  description: string;
  price: string[];
  benefits: benefit[];
  best: boolean;
  month: boolean;
}
export const Plan = ({
  title,
  price,
  description,
  benefits,
  best,
  month,
}: props) => {
  const [priceValue, setPpriceValue] = useState(parseInt(price[0]));
  useEffect(() => {
    if (!month && priceValue !== parseInt(price[0])) {
      const interval = setInterval(() => {
        if (priceValue === parseInt(price[0])) {
          return;
        }
        setPpriceValue(priceValue - 1);
      }, 1);
      return () => {
        clearInterval(interval);
      };
    }
    if (month) {
      const interval = setInterval(() => {
        if (priceValue === parseInt(price[1])) {
          return;
        }
        setPpriceValue(priceValue + 1);
      }, 10);
      return () => {
        clearInterval(interval);
      };
    }
  }, [month, priceValue]);
  return (
    <div
      className="plan"
      style={{ backgroundColor: `${best ? "#00218F" : "#FFFFFF"} ` }}
    >
      <h3 style={{ color: `${best ? "#FFFFFF" : "#0C0047"} ` }}>{title}</h3>
      <p style={{ color: `${best ? "#ECECEC" : "#969696"} ` }}>{description}</p>
      <div
        className="price"
        style={{ color: `${best ? "#FFFFFF" : "#0C0047"} ` }}
      >
        ${priceValue} <span>/month</span>{" "}
      </div>
      <Button
        txt="Select Plan"
        background={`${best ? "#FFFFFF" : "#00218F"}`}
        color={`${best ? "#152C5B" : "#FFFFFF"}`}
      />
      <div className="benefits-container">
        {benefits.map((benefit) => (
          <div
            className={`benefit${" "}${
              benefit.active ? "" : "no-active"
            }${" "}${best ? "best" : ""}`}
          >
            <div
              className={`${"benefit-status"}${" "}${
                benefit.active ? "" : "status-no-active"
              }${" "}${best ? "best-benefit" : ""}`}
            >
              <img src={best ? benefitImgLight : benefitImg} alt="" />
            </div>{" "}
            {benefit.title}
          </div>
        ))}
      </div>
    </div>
  );
};
