import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/MenuBar.css";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Service", path: "/service" }, // ✅ Fixed path
];

const MenuBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showToggle, setShowToggle] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Auto-close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Scroll visibility for toggle button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowToggle(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {showToggle && !menuOpen && (
        <div className="menu-toggle-wrapper">
          <div className="menu-toggle-circle" onClick={toggleMenu}></div>
        </div>
      )}

      <div className={`slide-menu ${menuOpen ? "open" : ""}`}>
        <span className="close-icon" onClick={toggleMenu}>×</span>
        <ul className="menu-3d">
          {menuItems.map((item, index) => (
            <li key={index}>
              <span className="number">0{index + 1}</span>
              <Link to={item.path} className="text">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
