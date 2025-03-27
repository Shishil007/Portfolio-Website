import React, { useState, useEffect } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        isVisible && (
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    background: "#007bff",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    cursor: "pointer",
                    borderRadius: "5px"
                }}>
                ↑ Top
            </button>
        )
    );
};

export default BackToTop;
