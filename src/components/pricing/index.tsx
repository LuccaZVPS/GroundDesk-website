import { useState } from "react";
import { Heading } from "../shared/heading";
import { Plan } from "./components/plan";
import { Toogle } from "./components/toogle";
import { plans } from "./data";
import "./styles.scss";
export const Pricing = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <section className="pricing">
      <Heading txt="Our pricing" />
      <p>
        Pay securely online and manage the booking via desktop or via the mobile
        app.
      </p>
      <div className="toogle-container">
        Monthly
        <div
          onClick={() => {
            setToogle(!toogle);
          }}
        >
          <Toogle toogle={toogle} />
        </div>
        Annualy
      </div>
      <div className="plan-container">
        {plans.map((plan) => (
          <Plan
            month={toogle}
            best={plan.best}
            title={plan.title}
            price={plan.price}
            description={plan.description}
            benefits={plan.benefits}
          />
        ))}
      </div>
    </section>
  );
};
