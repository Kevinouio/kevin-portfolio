// src/components/Hero.tsx
import styles from "../styles/components/Hero.module.css";

export default function Hero() {
    return (
        <section
            id="home"
            className={styles.heroSection}
            data-aos="fade-up"
        >
            {/* text */}
            <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>
                    Hey Guys, I’m <span className={styles.highlight}>Kevin Ho</span>
                </h1>

                <p className={styles.heroDescription}>
                    I’m a third-year student at Mississippi State University, double majoring in Computer Science and Mathematics. I’m passionate about exploring the intersection of theory and application — whether it’s building software, diving into algorithms, or experimenting with machine learning.

                    With a background in Python, C++, React, and TypeScript, I enjoy crafting thoughtful systems and learning how things work under the hood. I'm always curious, always building, and always trying to get better — one line of code at a time.
                </p>
            </div>

            {/* photo */}
            <div className={styles.photoContainer}>
                <div className={styles.photoWrapper}>
                    <img
                        src="/photo.jpg"           /* after moving into public/ */
                        alt="Kevin Ho"
                        className={styles.photoImg}
                    />
                </div>
            </div>
        </section>
    );
}
