import { useState } from "react";
// import style file
import "./style.css";

function Navbar() {
  const [stateNavbar, setStateNavbar] = useState(false);
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>Overview</li>
          <li>Audience Growth</li>
          <li>Engagement</li>
          <li>Comments/like Rtio</li>
          <li>Audience</li>
          <li>Similae Account</li>
        </ul>
      </nav>
      <nav className="navbar" style={{ display: stateNavbar ? "flex" : "none" }}>
        <ul>
          <li>Overview</li>
          <li>Audience Growth</li>
          <li>Engagement</li>
          <li>Comments/like Rtio</li>
          <li>Audience</li>
          <li>Similae Account</li>
        </ul>
      </nav>
      <div className="button-navbar" onClick={() => setStateNavbar(!stateNavbar)}>
        <span></span>
      </div>
    </>
  );
}

export default Navbar;
