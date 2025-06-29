import React from "react";
import "../styles/Footer.css";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/logo.jpg";


const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Gradient Background */}
      <div className="footer-gradient-bg"></div>

      {/* ✅ Logo at Top Center */}
      <div className="footer-logo-top">
        <img src={logo} alt="EarthNow Logo" />
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <h2 className="footer-heading">READY TO GAIN THE EARTHNOW ADVANTAGE?</h2>

        <div className="footer-buttons">
          <div className="footer-button">
            <p>ABOUT US</p>
            <div className="circle-btn">
              <ArrowLeft size={20} />
            </div>
          </div>
          <div className="footer-button">
            <p>LET'S TALK!</p>
            <div className="circle-btn">
              <ArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="social-icons">
          <Facebook size={18} />
          <Youtube size={18} />
          <Twitter size={18} />
          <Instagram size={18} />
          <Linkedin size={18} />
        </div>

        <div className="footer-links">
          <a href="#">SITEMAP</a>
          <a href="#">TERMS & CONDITIONS</a>
          <a href="#">PRIVACY POLICY</a>
        </div>

        <p className="copyright">
          © 2023 EARTHNOW INFOTECHNOLOGIES PVT. LTD.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
