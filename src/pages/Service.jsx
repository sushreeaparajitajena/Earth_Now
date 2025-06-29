import React from "react";
import "../styles/Service.css";
import bgImg from "../assets/Service/service.jpg";

import pic1 from "../assets/Service/pic1.jpg";
import img2 from "../assets/Service/img2.jpg";
import img3 from "../assets/Service/img3.jpg";
import img4 from "../assets/Service/img4.jpg";
import img5 from "../assets/Service/img5.jpg";
import img6 from "../assets/Service/img6.jpg";
import img7 from "../assets/Service/img7.jpg";
import img8 from "../assets/Service/img8.jpg";
import img9 from "../assets/Service/img9.jpg";
import img10 from "../assets/Service/img10.jpg";

import Header from "./Header"; // ✅ Make sure this path is correct

const services = [
  {
    title: "Innovations in Agro-Chemical Sector",
    description: "Pilot across 7 districts for precise stock management. Analysis in 2 districts for focused stock planning",
    image: pic1,
  },
  {
    title: "Poplar Tree Monitoring",
    description: "Strategic MoU with EY: Pilot program successfully delivered in Yamuna Nagar district, enabling precise monitoring of poplar plantations.",
    image: img2,
  },
  {
    title: "Green Watch Project",
    description: "Comprehensive real-time monitoring system tracking plantation health and growth across India's diverse forest regions",
    image: img3,
  },
  {
    title: "Localized Crop Advisory",
    description: "AI-ML models trained on localized Indian crop data, integrating hyper- local weather data, soil health, and satellite imagery to provide personalized advisories in regional languages.",
    image: img4,
  },
  {
    title: "End-to-End Agri Supply Chain Tracking",
    description: "AI-powered solutions track crop production from farm to market, integrating satellite data, IoT sensors, and supply chain logistics for real-time monitoring of crop health, harvest times, and market operations.",
    image: img5,
  },
  {
    title: "Monitor Urban Growth",
    description: "Track urban expansion and development patterns through high- resolution satellite imagery",
    image: img6,
  },
  {
    title: "Track Land Use Changes",
    description: "Analyze transitions in land usage from rural to urban landscapes",
    image: img7,
  },
  {
    title: "AI-ML Integration",
    description: "Advanced algorithms for detection, classification, and prediction, enabling automated monitoring and early warning systems.",
    image: img8,
  },
  {
    title: "GIS Dashboard",
    description: "Real-time visualization and decision- making tools providing actionable insights for mining operations and compliance monitoring.",
    image: img9,
  },
  {
    title: "AI-ML Classification",
    description: "Advanced AI-ML algorithms classify mining areas and flag anomalies, providing authorities with timely alerts on potential illegal operations. This enhances enforcement capabilities and reduces revenue losses.",
    image: img10,
  },
];

const Service = () => {
  return (
    <>
      <Header /> {/* ✅ Header added here */}

      <section className="services-section">
        {/* Background Image Section */}
        <div className="image-banner">
         
        </div>

        {/* Overlapping Cards */}
        <div className="card-overlap-wrapper">
          <div className="services-grid">
            {services.slice(0, 5).map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.image} alt={service.title} className="service-image" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="card-section">
          <div className="services-grid">
            {services.slice(5).map((service, index) => (
              <div className="service-card second-row-card" key={index + 5}>
                <img src={service.image} alt={service.title} className="service-image" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
