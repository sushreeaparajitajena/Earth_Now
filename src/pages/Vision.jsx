import React from "react";
import "../styles/Vision.css";
import visionImage from "../assets/Picture1.jpg"; // Make sure image exists

const Vision = () => {
  return (
    <div className="vision-section">
      {/* Left Text Content */}
      <div className="vision-text">
        <h1>Our Vision & Mission</h1>
        <p>
         We exist to make a significant contribution to the scalable and sustainable growth of Indian Agriculture Industry. We aim to create a social impact by enabling integrated farm insights to farm aggregators, seed & organic fertilizer companies, banking and insurance, government institutions, marketplace and supply chain management thereby benefiting the farmers and their families across all the districts in India.
        </p>
        <p>
          Our expertise allows our customers: to increase their yields, optimize chemical inputs, promote sustainable farming and make informed “agronomic” decisions. By pushing the boundaries of science and technology, our mission is to scale and improve efficiency of global crop production through a sustainable ecosystem
        </p>
      </div>

      {/* Right Image Content */}
      <div className="vision-image">
        <img src={visionImage} alt="Vision visual" />
      </div>
    </div>
  );
};

export default Vision;
