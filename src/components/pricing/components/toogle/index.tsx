import { useEffect, useRef } from "react";
import "./styles.scss";
interface props {
  toogle: boolean;
}
export const Toogle = ({ toogle }: props) => {
  const ball = useRef(null as unknown as HTMLDivElement);
  useEffect(() => {
    if (toogle) {
      ball.current.classList.replace("false", "true");
      return;
    }
    ball.current.classList.replace("true", "false");
  }, [toogle]);
  return (
    <div className="toogle">
      <div className="ball false" ref={ball}></div>
    </div>
  );
};
