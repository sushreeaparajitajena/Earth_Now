import React from "react";
import MenuBar from "./MenuBar"; // Toggle icon/menu
import logo from "../assets/logo.jpg"; // ✅ Adjust path if needed
import "../styles/Header.css"; // ✅ For styling (optional if not yet created)

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={logo} alt="EarthNow Logo" className="header-logo" />
      </div>
      <MenuBar />
    </header>
  );
};

export default Header;
