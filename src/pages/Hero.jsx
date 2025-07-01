import React from "react";
import "../styles/Hero.css";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="hero-container">
      <Header />

      <video className="background-video" autoPlay loop muted playsInline>
        <source
          src="https://res.cloudinary.com/dkyfpnmqm/video/upload/v1751392817/bg1_fmoliu.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="overlay">
        <h1 className="main-text">explore</h1>
        <p className="sub-text">intelligence</p>
        <div className="play-button">
          <span>&#9658;</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
