import "./styles/Nav.css";
import { NAV_LOGO } from "../utils/constants";
import { AVATAR } from "../utils/constants";
import { useEffect, useState } from "react";

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleShow = (showStatus) => {
    setShow(showStatus);
  };

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img src={NAV_LOGO} alt="logo" className="nav_logo" />
        <img src={AVATAR} alt="logo" className="nav_avatar" />
      </div>
    </div>
  );
};

export default Nav;
