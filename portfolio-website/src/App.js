import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import BackToTop from "./components/BackToTop";

function App() {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Certifications />
                <Contact />
            </main>
            <BackToTop />
            <Footer />
        </div>
    );
}

export default App;
