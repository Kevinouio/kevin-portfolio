// Portfolio.tsx
import React from "react";
import Hero from "../components/Hero";
import FunFacts from "../components/FunFacts";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

const Portfolio: React.FC = () => {
    return (
        <div className="bg-background text-text-dark">
            <Hero/>

            <section id="projects" className="section">
                <Projects/>
            </section>

            <section id="skills" className="section">
                <Skills/>
            </section>

            <section id="resume" className="section">
                <Resume/>
            </section>

            <section id="fun-facts" className="section">
                 <FunFacts/>
            </section>


            <section id="contact" className="section">
            <Contact/>
            </section>
        </div>
    );
};

export default Portfolio;
