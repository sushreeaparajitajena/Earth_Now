import React from "react";
import "../styles/Hero.css";
import bgVideo from "../assets/bg1.mp4";
import Header from "./Header"; // ✅ Import the Header component

const Hero = () => {
  return (
    <div className="hero-container">
      <Header /> {/* ✅ Add your full header with logo and MenuBar */}

      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
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
