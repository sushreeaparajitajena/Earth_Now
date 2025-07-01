import React from "react";
import "../styles/About.css";
import leader1 from "../assets/AboutPic/bnrao.avif";
import leader2 from "../assets/AboutPic/ManojSamudra.avif";
import Header from "./Header";

const About = () => {
  return (
    <>
      <section className="about-hero-section">
        <Header />

        {/* Background Video Section */}
        <div className="about-hero-video">
          <video autoPlay muted loop playsInline className="video-bg">
            <source
              src="https://res.cloudinary.com/dkyfpnmqm/video/upload/v1751393968/bg-video_pwcdje.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="about-overlay">
            <h1 className="about-title">About Us</h1>
            <p className="about-subtitle">For explorers everywhere.</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="description-content">
          <h2 className="tagline">
            At EarthNow, we believe that<br />
            true progress begins with purpose—and that purpose is rooted <br />
            in protecting our planet.
          </h2>
          <p>
            In an age defined by rapid technological evolution, we see an urgent opportunity to channel innovation toward sustainability and impact.
            As the world embraces the power of Industry 4.0, EarthNow takes it a step further...
          </p>
          <p>
            Our goal is simple yet bold: to enable smarter decisions, reduce environmental harm, and create a more connected, sustainable world...
          </p>
        </div>

        {/* Leadership Section */}
        <div className="leader-section">
          <div className="leader-image">
            <img src={leader1} alt="B. N. Rao" />
          </div>
          <div className="leader-text">
            <p>
              Proven track record of 24 years in Geo-Spatial Tech Industry.
              Passion for Agriculture and Farming. Leadership role in various organizations.
              Pioneered GIS initiatives in India, Disaster Management and Tsunami Early Warning Projects.
              Keynote in Smart Cities and Geospatial Conferences.
            </p>
            <p>
              It is my passion for Agriculture and Farming that led to envisioning Earth Now integrated platform to deliver
              advanced analytics leveraging satellite remote sensing for soil, crop and micro-weather intelligence.
              Together with Earth Now team, we aspire to create sustainable and scalable impact through our solutions and
              services for agriculture ecosystem and its stakeholders.
            </p>
            <h4 className="leader-name">B. N. RAO,</h4>
            <p className="leader-title">CO-FOUNDER AND CEO</p>
          </div>
        </div>

        <div className="leader-section reverse">
          <div className="leader-image">
            <img src={leader2} alt="MANOJ SAMUDRA" />
          </div>
          <div className="leader-text">
            <p>
              Versatile experience of 26 years in Information Technology Project implementation
              for United Nations, Governments, PSUs and Large Enterprises in India and overseas.
              Established Center of Excellence for Command & Control Centre.
              Actively involved in Pre-Sales and Business Development, Partnership & Alliance.
            </p>
            <p>
              I am an evangelist for adoption of emerging technologies and have incubated center of excellence for
              IoT-based command and control solutions and led implementation of flagship projects. With Earth Now,
              we aspire to build Agronomy map of India to serve as an agri-digitization platform.
            </p>
            <h4 className="leader-name">MANOJ SAMUDRA,</h4>
            <p className="leader-title">CO-FOUNDER AND COO</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
