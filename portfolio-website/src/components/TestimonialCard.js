import React from "react";

const TestimonialCard = ({ name, text }) => {
    return (
        <div className="testimonial-card">
            <h3>{name}</h3>
            <p>"{text}"</p>
        </div>
    );
};

export default TestimonialCard;
