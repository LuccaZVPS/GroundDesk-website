import { useEffect, useRef, useState } from "react";
import { Button } from "../../../shared/button";
import { MenuHamburger } from "../menu-hamburger";
import "./styles.scss";
export const Header = () => {
  const [open, setOpen] = useState(false);
  const menu = useRef(null as unknown as HTMLDivElement);
  useEffect(() => {
    if (open) {
      menu.current.className = "menu-open";
      return;
    }
    menu.current.className = "menu-close";
  }, [open]);
  return (
    <header>
      <div className="logo">
        <img src="/Logo.png" alt="" />
        <span>GroundDesk</span>
      </div>
      <nav ref={menu}>
        <ul>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Solution</a>
          </li>
          <li>
            <a href="#">Customer</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
      <div className="btns">
        <Button txt="Login" background="transparent" color="#FFFFFF" />
        <Button txt="Sign up" background="#FFFFFF" color="#6A4BFF" />
      </div>
      <div
        className="menu"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuHamburger open={open} />
      </div>
    </header>
  );
};
