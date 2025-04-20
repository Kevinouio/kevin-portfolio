import styles from "../styles/components/FactSlide.module.css";
import { FunFact } from "../data/funFacts";

interface FactSlideProps {
    fact: FunFact;
    /** flip layout on even indices */
    reverse?: boolean;
}

export default function FactSlide({ fact, reverse }: FactSlideProps) {
    return (
        <section
            id={`fun-fact-${fact.id}`}
            className={`${styles.factSection} ${reverse ? styles.reverse : ""}`}
            data-aos="fade-up"
        >
            {/* Text */}
            <div className={styles.textBlock}>
                <h2 className={styles.title}>{fact.title}</h2>
                <p className={styles.description}>{fact.description}</p>
            </div>

            {/* Image */}
            <div className={styles.imageBlock}>
                <img src={fact.image} alt={fact.title} className={styles.image} />
            </div>
        </section>
    );
}
