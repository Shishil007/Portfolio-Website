import React from "react";
import "../styles/Certifications.css";

const Certifications = () => {
    return (
        <section id="certifications" className="certifications-section">
            <h2>Certifications</h2>
            <div className="certifications-container">

                <div className="certifications-content">
                    <ul>
                        <li><strong>DSA with Java</strong> – Apna College</li>
                        <li><strong>Web Development (MERN)</strong> – Apna College</li>
                        <li><strong>Introduction to Cybersecurity</strong> – Great Learning Academy</li>
                        <li><strong>AWS Academy Data Engineering</strong> – AWS Academy</li>
                        <li><strong>AWS Academy Cloud Foundations</strong> – AWS Academy</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
