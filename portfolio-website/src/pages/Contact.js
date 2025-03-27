import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:sandilyashishil@gmail.com?subject=New Contact Message from ${formData.name}&body=${encodeURIComponent(formData.message + "\n\nReply to: " + formData.email)}`;
        window.location.href = mailtoLink;
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
