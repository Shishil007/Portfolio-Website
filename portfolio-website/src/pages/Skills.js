import React from "react";
import "../styles/Skills.css";

const Skills = () => {
    return (
        <section id="skills" className={"skills-container"}>
            <h2>Technical Skills</h2>
            <div className="skills-wrapper">

                <ul>
                    <li>Languages: Java, JavaScript, SQL, C, Python</li>
                    <li>Frameworks & Tools: React, Node.js, Express, MongoDB, AWS</li>
                    <li>Other: Problem-Solving, Project Management, Critical Thinking</li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;
