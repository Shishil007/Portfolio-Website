import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Project.css"; // Ensure the correct CSS file is imported

const Projects = () => {
    const projects = [
        {
            title: "Hotel Booking Website",
            description: "A full-stack platform with property listings, search, and user reviews.",
            technologies: "React, Node.js, MongoDB, Express"
        },
        {
            title: "Online Trading Platform",
            description: "A MERN-based trading platform with real-time stock price tracking.",
            technologies: "React, Node.js, MongoDB, WebSockets"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2>Projects</h2>
                <div className="projects-content">
                    {projects.map((p, index) => (
                        <ProjectCard key={index} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
