import FactSlide from "./FactSlide";
import { funFacts } from "../data/funFacts";

export default function FunFacts() {
    return (
        <section id="fun-facts" style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.5rem", color: "var(--text-dark)", marginBottom: "2rem" }}>
                Fun Facts & Extracurriculars
            </h2>

            {funFacts.map((fact, i) => (
                <FactSlide key={fact.id} fact={fact} reverse={i % 2 === 1} />
            ))}
        </section>
    );
}
