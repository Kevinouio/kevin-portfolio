// src/components/Projects.tsx
import React from "react";
import styles from "../styles/components/Projects.module.css";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className={styles.projectsSection} data-aos="fade-up">
            <h2 className={styles.heading}>My Projects</h2>

            <div className={styles.projectGrid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.projectCard}>
                        {project.image && (
                            <img src={project.image} alt={project.title} className={styles.projectImage} />
                        )}

                        <h3 className={styles.projectTitle}>{project.title}</h3>

                        <p className={styles.projectDescription}>{project.description}</p>

                        <ul className={styles.techList}>
                            {project.technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>

                        <div className={styles.links}>
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            )}
                            {project.demoLink && (
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
