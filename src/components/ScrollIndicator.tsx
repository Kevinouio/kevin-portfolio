import { useEffect, useRef, useState } from "react";
import styles from "../styles/components/ScrollIndicator.module.css";

const sections = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "fun-facts", label: "Fun Facts" },
    { id: "contact", label: "Contact" },
];

export default function ScrollIndicator() {
    const [active, setActive] = useState(sections[0].id);
    const dotRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
    const [highlightTop, setHighlightTop] = useState(0);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });

        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        const el = dotRefs.current[active];
        if (el) {
            const offsetTop = el.offsetTop + el.offsetHeight / 2;
            setHighlightTop(offsetTop);
        }
    }, [active]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <nav className={styles.wrapper}>
            <div className={styles.line} />

            <div
                className={styles.highlightDot}
                style={{ top: `${highlightTop}px` }}
            />

            <ul className={styles.dots}>
                {sections.map(({ id, label }) => (
                    <li
                        key={id}
                        ref={(el) => {
                            dotRefs.current[id] = el;
                        }}

                        className={styles.dotWrapper}
                        onClick={() => scrollTo(id)}
                    >
                        <button
                            className={`${styles.dot} ${active === id ? styles.active : ""}`}
                            aria-label={label}
                        />
                        <span className={styles.label}>{label}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
