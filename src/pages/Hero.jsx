import React from "react";
import "../styles/Hero.css";
import Header from "./Header"; // ✅ Import the Header component

const Hero = () => {
  return (
    <div className="hero-container">
      <Header /> 

      <video className="background-video" autoPlay loop muted>
        <source
          src="https://drive.google.com/uc?export=download&id=1CLq0G0c1jo5yzF_Si5Nv4BzlXLqO43_w"
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
