import React, { useState } from "react";
import Calendar from "../assets/calendar.svg";
import downArrow from "../assets/downArrow.svg";
import share from "../assets/shareIcon.svg";

import "../styles/headers.css";

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={`headers ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header_left">
        <img src={Calendar} alt="company logo" />
        <h2>Appointment Booking System</h2>
      </div>
      <div className="header_right">
      <div className="hamburger-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`header_list ${menuOpen ? 'menu-open' : ''}`}>
          <div className="header_menu">
            <div className="dropdown">
              <button>Menu</button>
              <img
                src={downArrow}
                alt="down arrow"
                height={"20px"}
                width={"20px"}
              />
            </div>
            <div className="dropdown_header">
              <a href="/">Option 1</a>
              <a href="/">Option 2</a>
              <a href="/">Option 3</a>
            </div>
          </div>
          <li>
            <a href="/">Contact us</a>
          </li>
          <div className="share_link">
            <img src={share} alt="company logo" />
            <button>Share Link</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
