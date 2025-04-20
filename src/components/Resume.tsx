// src/components/Resume.tsx
import styles from "../styles/components/Resume.module.css";

export default function Resume() {
    return (
        <section id="resume" className={styles.resumeSection} data-aos="fade-up">
            <h2 className={styles.heading}>Resume</h2>

            <object
                data="/Resume.pdf"
                type="application/pdf"
                width="100%"
                height="900px"
                className={styles.pdfEmbed}
            >
                <p>
                    Your browser doesn’t support PDFs.{" "}
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                        Download the PDF
                    </a>.
                </p>
            </object>
        </section>
    );
}
