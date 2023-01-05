import { useEffect, useRef, useState } from "react";
import "./styles.scss";
interface props {
  open: boolean;
}
export const MenuHamburger = ({ open }: props) => {
  const container = useRef(null as unknown as HTMLDivElement);
  useEffect(() => {
    if (open) {
      changeClassName("open", "closed");
      return;
    }
    changeClassName("closed", "open");
  }, [open]);

  const changeClassName = (className: string, remove: string) => {
    const lines = container.current.querySelectorAll("span");
    lines.forEach((line, number: number) => {
      line.classList.replace(`${remove + number}`, `${className + number}`);
    });
  };

  return (
    <div className="lines" ref={container}>
      <span className="line1 closed0"></span>
      <span className="line2 closed1"></span>
      <span className="line3 closed2"></span>
    </div>
  );
};
