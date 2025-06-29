import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import Header from "./Header";

const ContactUs = () => {

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {/* Course Banner Section */}
            <div className="course-banner">
                <Header />
                <div className="banner-overlay">
                    <h1 className="banner-title">Contact Us</h1>
                </div>
            </div>

            <div className="contact-container">
                <div className="contact-card">
                    <h2 className="contact-title">Connect With Us</h2>
                    <div className="contact-item">
                        <FaPhoneAlt className="contact-icon" />
                        <div>
                            <h3>Contact</h3>
                            <p>
                                <a href="tel:+918260899960">+91-8260899960</a> |
                                <a href="tel:06744064162"> 0674-4064162</a>
                            </p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <div>
                            <h3>Mail</h3>
                            <p><a href="mailto:info@earthnow.tech">info@earthnow.tech</a></p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <div>
                            <h3>Location</h3>
                            <p>
                                503 Murli Corporate Park, A-80, Rd. 16, Wagle Estate,
                                Thane 400604, Maharashtra, INDIA
                            </p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2 className="form-title">LET'S DISCUSS</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Name *" required />
                            <input type="email" placeholder="Email *" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Phone *" required />
                            <input type="text" placeholder="Subject *" required />
                        </div>
                        <textarea placeholder="Write A Message" required></textarea>
                        <button type="submit" className="custom-btn">Send</button>
                    </form>
                </div>

                {/* Floating Buttons */}
                <div className="floating-buttons">
                    <button className="call-btn">
                        <a href="tel:+918260899960"><FaPhoneAlt /></a>
                    </button>
                    <button className="arrow-btn" onClick={scrollToTop}>
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;