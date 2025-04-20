// src/components/Projects.tsx
import { useState } from "react";
import styles from "../styles/components/Projects.module.css";
import { allProjects, Project } from "../data/projects";

const BATCH_SIZE = 3;

export default function Projects() {
    // how many projects to show initially / after each click
    const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

    // slice the array for rendering
    const visibleProjects = allProjects.slice(0, visibleCount);

    const handleShowMore = () => {
        setVisibleCount((prev) =>
            Math.min(prev + BATCH_SIZE, allProjects.length)
        );
    };

    return (
        <section id="projects" className={styles.projectsSection} data-aos="fade-up">
            <h2 className={styles.heading}>My Projects</h2>
            <div className={styles.projectGrid}>
                {visibleProjects.map((proj: Project) => (
                    <div key={proj.id} className={styles.projectCard}>
                        {proj.image && (
                            <img
                                src={proj.image}
                                alt={proj.title}
                                className={styles.projectImage}
                            />
                        )}
                        <h3 className={styles.projectTitle}>{proj.title}</h3>
                        <p className={styles.projectDescription}>{proj.description}</p>
                        {proj.technologies && (
                            <ul className={styles.techList}>
                                {proj.technologies.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        )}
                        <div className={styles.links}>
                            {proj.githubLink && (
                                <a href={proj.githubLink} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            )}
                            {proj.demoLink && (
                                <a href={proj.demoLink} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < allProjects.length && (
                <div className={styles.showMoreContainer}>
                    <button onClick={handleShowMore} className={styles.showMoreButton}>
                        Show More
                    </button>
                </div>
            )}
        </section>
    );
}
