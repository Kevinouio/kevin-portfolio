// src/components/Skills.tsx
import React from "react";
import styles from "../styles/components/Skills.module.css";
import { skillCategories } from "../data/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            className={styles.skillsSection}
            data-aos="fade-up"
        >
            <h2 className={styles.heading}>Skills</h2>
            <p className={styles.description}>
                Throughout my academic journey, I’ve built proficiency across languages,
                frameworks, databases, and libraries.
            </p>

            <div className={styles.grid}>
                {skillCategories.map((cat) => (
                    <div key={cat.title} className={styles.category}>
                        <h3 className={styles.categoryTitle}>{cat.title}</h3>
                        {cat.skills.map((skill) => (
                            <div key={skill.name} className={styles.skillItem}>
                                <span className={styles.skillLabel}>{skill.name}</span>
                                <div className={styles.progressBar}>
                                    <div
                                        className={styles.progressFill}
                                        style={{ "--level": `${skill.level}%` } as React.CSSProperties}
                                    >
                                        {skill.level}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
