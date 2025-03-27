import React from "react";

const ProjectCard = ({ title, description, technologies }) => {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Tech Stack:</strong> {technologies}</p>
        </div>
    );
};

export default ProjectCard;
