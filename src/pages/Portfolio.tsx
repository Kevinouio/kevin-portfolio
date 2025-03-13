import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

const Portfolio: React.FC = () => {
    return (
        <div className="bg-background">
            <Hero />
            <About />
            <Projects />
        </div>
    );
};

export default Portfolio;
