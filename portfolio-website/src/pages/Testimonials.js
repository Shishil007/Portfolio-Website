import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import "../styles/Testimonials.css";

const Testimonials = () => {
    const testimonials = [
        { name: "John Doe", text: "Shishil is an outstanding developer with great problem-solving skills." },
        { name: "Jane Smith", text: "His expertise in React and full-stack development is impressive." },
    ];

    return (
        <section id="testimonials">
            <div className="skills-wrapper">
            <h2>Testimonials</h2>
            {testimonials.map((t, index) => (
                <TestimonialCard key={index} name={t.name} text={t.text} />
            ))}
            </div>
        </section>
    );
};

export default Testimonials;
